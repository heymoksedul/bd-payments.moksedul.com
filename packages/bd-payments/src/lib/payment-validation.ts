/**
 * Transaction ID input constraints, derived from the regex configured for each
 * payment method.
 *
 * Rather than hardcoding "bKash is 10 characters" in the UI (which would drift
 * the moment someone edits the pattern), we read the pattern itself and pull
 * out what the input needs: which characters are allowed and how long the value
 * may be. One source of truth, and the field physically can't accept something
 * the server will reject.
 */

export interface TrxIdConstraints {
  /** Characters the field accepts. Anything else is dropped as it's typed. */
  allowed: RegExp;
  minLength: number;
  /** Hard cap applied to the input — typing simply stops here. */
  maxLength: number;
  /** Whether input should be upper-cased as the user types. */
  uppercase: boolean;
  /** Human-readable requirement, e.g. "10 characters". */
  hint: string | null;
}

const FALLBACK: TrxIdConstraints = {
  allowed: /[A-Za-z0-9-]/,
  minLength: 1,
  maxLength: 40,
  uppercase: true,
  hint: null,
};

/**
 * Understands the shapes we actually use in config:
 *   ^[A-Z0-9]{10}$      → exactly 10
 *   ^[A-Z0-9]{6,20}$    → between 6 and 20
 *   ^[A-Z0-9-]+$        → one or more
 * Anything more exotic falls back to permissive limits and leaves the real
 * check to the full-pattern test (and the server).
 */
export function parseTrxIdConstraints(
  pattern: string | undefined,
): TrxIdConstraints {
  if (!pattern) return FALLBACK;

  const match = /^\^\[([^\]]+)\]\{(\d+)(?:,(\d+))?\}\$$/.exec(pattern);
  const plusMatch = /^\^\[([^\]]+)\]\+\$$/.exec(pattern);

  const charClass = match?.[1] ?? plusMatch?.[1];
  if (!charClass) return FALLBACK;

  let allowed: RegExp;
  try {
    allowed = new RegExp(`[${charClass}]`);
  } catch {
    return FALLBACK;
  }

  // If the class only lists upper-case letters, the provider's IDs are
  // upper-case and we can safely transform as the user types.
  const uppercase = !charClass.includes("a-z");

  const min = match ? Number(match[2]) : 1;
  const max = match ? Number(match[3] ?? match[2]) : FALLBACK.maxLength;

  const hint =
    match && min === max
      ? `${min} characters`
      : match
        ? `${min}–${max} characters`
        : null;

  return { allowed, minLength: min, maxLength: max, uppercase, hint };
}

/**
 * Clean a keystroke-by-keystroke value: strip disallowed characters, apply
 * casing, and cut at the maximum length so the field can never hold more than
 * the provider issues.
 */
export function sanitiseTrxId(
  raw: string,
  constraints: TrxIdConstraints,
): string {
  const cased = constraints.uppercase ? raw.toUpperCase() : raw;
  const filtered = Array.from(cased)
    .filter((ch) => constraints.allowed.test(ch))
    .join("");
  return filtered.slice(0, constraints.maxLength);
}

/**
 * Pull the ID out of pasted text.
 *
 * Buyers rarely paste a bare ID — they long-press the SMS and get something
 * like `"...Fee Tk 0.00. TrxID 9F7A2B1C3D at 12/07/2026"`. Naively filtering
 * that would splice the label into the value ("TRXID9F7A2"), so we look for the
 * labelled token first, then fall back to the longest token that fits the
 * method's own length rules.
 */
export function extractTrxId(
  raw: string,
  pattern: string | undefined,
  constraints: TrxIdConstraints,
): string {
  const text = raw.trim();

  // 1. An explicitly labelled ID wins — that's the provider's own wording.
  const labelled = /(?:trx|txn|transaction)\s*id\s*[:\-]?\s*([A-Za-z0-9-]+)/i
    .exec(text)?.[1];
  if (labelled) {
    const cleaned = sanitiseTrxId(labelled, constraints);
    if (isValidTrxId(cleaned, pattern, constraints)) return cleaned;
  }

  // 2. A short paste is almost certainly the ID itself.
  const whole = sanitiseTrxId(text, constraints);
  if (!/\s/.test(text) && isValidTrxId(whole, pattern, constraints)) {
    return whole;
  }

  // 3. Otherwise scan the tokens for one that satisfies the pattern.
  const candidates = text
    .split(/\s+/)
    .map((token) => sanitiseTrxId(token, constraints))
    .filter((token) => isValidTrxId(token, pattern, constraints));
  if (candidates.length) {
    // Longest wins — a stray "TK" or "AT" can't outrank the real ID.
    return candidates.sort((a, b) => b.length - a.length)[0];
  }

  return whole;
}

/** Full validity check — used to gate the Continue button. */
export function isValidTrxId(
  value: string,
  pattern: string | undefined,
  constraints: TrxIdConstraints,
): boolean {
  if (value.length < constraints.minLength) return false;
  if (value.length > constraints.maxLength) return false;
  if (!pattern) return value.length > 0;
  try {
    return new RegExp(pattern).test(value);
  } catch {
    // A malformed pattern must not block a genuine payment; the length checks
    // above still apply and the server validates independently.
    return true;
  }
}
