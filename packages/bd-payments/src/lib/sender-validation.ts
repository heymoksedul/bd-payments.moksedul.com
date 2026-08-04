/**
 * Buyer's own sender-number ("Your wallet number" / "Your account number")
 * input constraints — the mirror of `payment-validation.ts`'s
 * transaction-ID constraint parser, but numeric-first: never upper-cased,
 * digits (and a leading "+") by default.
 */

import type { PaymentMethod } from "../types";

export interface SenderNumberConstraints {
  /** Characters the field accepts. Anything else is dropped as it's typed. */
  allowed: RegExp;
  minLength: number;
  /** Hard cap applied to the input — typing simply stops here. */
  maxLength: number;
  /** Human-readable requirement, e.g. "11 digits". */
  hint: string | null;
}

const FALLBACK: SenderNumberConstraints = {
  allowed: /[\d+]/,
  minLength: 1,
  maxLength: 20,
  hint: null,
};

const WALLET_METHODS = new Set<PaymentMethod>([
  "BKASH",
  "NAGAD",
  "ROCKET",
  "UPAY",
  "CELLFIN",
]);

/** BD mobile wallet numbers: 11 digits, starting 01[3-9] (e.g. 017XXXXXXXX). */
export const BD_MOBILE_SENDER_PATTERN = "^01[3-9]\\d{8}$";

/**
 * Wallet rails (bKash/Nagad/Rocket/Upay/CellFin) all move money from a BD
 * mobile number, so their sender-number pattern can safely default to the
 * standard 11-digit shape when the store hasn't set one explicitly.
 *
 * Bank account numbers have no universal shape across banks — length and
 * structure differ per bank — so `BANK_TRANSFER` (and `CARD`) get no
 * default. Set `senderNumberPattern` on the option yourself if you want a
 * strict check for your specific bank.
 */
export function defaultSenderNumberPattern(
  method: PaymentMethod,
): string | undefined {
  return WALLET_METHODS.has(method) ? BD_MOBILE_SENDER_PATTERN : undefined;
}

/**
 * Derive length/character-set input constraints from a sender-number
 * pattern, the same idea as `parseTrxIdConstraints`. Understands
 * `^[chars]{m,n}$`, `^\d{m,n}$` and their `+`-quantified forms (e.g. a
 * bank-specific `^\d{10,17}$`); anything more exotic falls back to
 * permissive numeric limits and leaves the real check to
 * `isValidSenderNumber` (and the server).
 */
export function parseSenderNumberConstraints(
  pattern: string | undefined,
): SenderNumberConstraints {
  if (pattern === BD_MOBILE_SENDER_PATTERN) {
    return {
      allowed: /\d/,
      minLength: 11,
      maxLength: 11,
      hint: "11 digits, e.g. 017XXXXXXXX",
    };
  }
  if (!pattern) return FALLBACK;

  const match = /^\^(\\d|\[[^\]]+\])\{(\d+)(?:,(\d+))?\}\$$/.exec(pattern);
  const plusMatch = /^\^(\\d|\[[^\]]+\])\+\$$/.exec(pattern);
  const token = match?.[1] ?? plusMatch?.[1];
  if (!token) return FALLBACK;

  const charClass = token === "\\d" ? "0-9" : token.slice(1, -1);
  let allowed: RegExp;
  try {
    allowed = new RegExp(`[${charClass}]`);
  } catch {
    return FALLBACK;
  }

  const min = match ? Number(match[2]) : 1;
  const max = match ? Number(match[3] ?? match[2]) : FALLBACK.maxLength;
  const hint =
    match && min === max
      ? `${min} digits`
      : match
        ? `${min}–${max} digits`
        : null;

  return { allowed, minLength: min, maxLength: max, hint };
}

/** Clean a keystroke-by-keystroke value: strip disallowed characters, cut to length. */
export function sanitiseSenderNumber(
  raw: string,
  constraints: SenderNumberConstraints,
): string {
  const filtered = Array.from(raw)
    .filter((ch) => constraints.allowed.test(ch))
    .join("");
  return filtered.slice(0, constraints.maxLength);
}

/** Full validity check — used to gate the Continue button when a sender number is required. */
export function isValidSenderNumber(
  value: string,
  pattern: string | undefined,
  constraints: SenderNumberConstraints,
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
