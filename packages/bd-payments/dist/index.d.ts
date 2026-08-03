import * as react from 'react';
import react__default, { ReactNode } from 'react';

/**
 * Public types for @hellokit/bd-payments.
 *
 * The dialog knows about the six payment rails commonly used by Bangladeshi
 * stores, but every label, brand colour, logo, instruction and flow detail is
 * data you pass in — nothing about your store is baked into the component.
 */
/** The payment rails the dialog understands. */
type PaymentMethod = "COD" | "BKASH" | "NAGAD" | "ROCKET" | "UPAY" | "CELLFIN" | "BANK_TRANSFER" | "CARD";
/**
 * One payment option your store has switched on. Everything except `method`
 * is optional, so the simplest possible option is `{ method: "BKASH" }`.
 */
interface PaymentOption {
    method: PaymentMethod;
    /** Overrides the default label (e.g. "bKash Personal"). */
    label?: string;
    /** Wallet / account number the buyer sends money to. */
    accountNumber?: string;
    accountName?: string;
    accountType?: "PERSONAL" | "AGENT" | "MERCHANT";
    /** Uploaded brand logo. Absent → the dialog draws its own branded tile. */
    logoUrl?: string;
    /** Bank transfer only. */
    bankName?: string;
    branchName?: string;
    routingNumber?: string;
    /**
     * Buyer-facing steps. Supports `{{amount}}`, `{{number}}` and
     * `{{orderNumber}}` placeholders; newlines become numbered steps.
     */
    instructions?: string;
    /** When true the Continue button is blocked until a transaction ID is entered. */
    requireTransactionId?: boolean;
    /**
     * Regex the transaction ID must satisfy, e.g. `^[A-Z0-9]{10}$`. The input
     * derives its allowed characters and length limits from this pattern.
     */
    transactionIdPattern?: string;
    sortOrder?: number;
}
/** A single label/value row shown in the review recap. */
interface SummaryRow {
    label: string;
    value: string;
}
/** What `onConfirm` receives once the buyer confirms. */
interface PaymentResult {
    method: PaymentMethod;
    transactionId?: string;
    senderNumber?: string;
    /** True when the buyer chose to pay the advance instead of the full amount. */
    isAdvance?: boolean;
}
/** Optional Cash-on-Delivery advance flow. Omit to disable the advance choice. */
interface AdvanceConfig {
    /** Show the "pay an advance now" choice for COD orders. */
    enabled: boolean;
    /** Formatted advance amount, e.g. "Tk 500". */
    amountLabel: string;
    /** Short blurb shown on the COD choice screen. */
    description?: string;
}
/** Header branding for the dialog. */
interface BrandingConfig {
    /** Dialog title, e.g. "Acme Payment". Defaults to "Payment". */
    title?: string;
    /** Subtitle shown under the title on the method screen. */
    subtitle?: string;
    /** Logo shown at the top of the method screen. */
    logoUrl?: string;
    /** Footer reassurance line. Set to null to hide it. */
    secureNote?: string | null;
}
/**
 * Visual identity of a single payment method. Pass a partial map to
 * `PaymentDialog`'s `brands` prop to recolour or re-label any rail.
 */
interface PaymentBrand {
    color: string;
    colorDark: string;
    onColor: string;
    logoUrl?: string;
    wordmark: string;
    tagline: string;
}
/**
 * Theme overrides. Each key maps to a `--bdp-*` CSS variable, so you can match
 * the dialog to your brand without touching a stylesheet.
 */
interface PaymentTheme {
    /** Accent / primary colour. */
    primary?: string;
    primaryForeground?: string;
    /** Dialog surface. */
    background?: string;
    foreground?: string;
    /** Secondary surfaces (amount pill, step rail). */
    muted?: string;
    mutedForeground?: string;
    border?: string;
    destructive?: string;
    radius?: string;
}
/** Global config supplied through <BdPaymentProvider>. */
interface BdPaymentConfig {
    theme?: PaymentTheme;
    /** Force a colour scheme instead of following the host's `.dark` class. */
    colorScheme?: "light" | "dark";
}

interface PaymentDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    /** The payment options your store has enabled. */
    options: PaymentOption[];
    /** Order total, already formatted for display (e.g. "Tk 1,299"). */
    amountLabel: string;
    /** Short recap shown on the review step. */
    summary: SummaryRow[];
    /** Called when the buyer confirms. Set `placing` while your request runs. */
    onConfirm: (result: PaymentResult) => void | Promise<void>;
    /** True while the order is being placed — disables the dialog and shows a spinner. */
    placing?: boolean;
    /** Pre-select a rail. Pass "COD" to open straight into the COD flow. */
    initialPaymentMethod?: PaymentMethod | string | null;
    /** Header title / subtitle / logo / footer note. */
    branding?: BrandingConfig;
    /** Optional Cash-on-Delivery advance flow. Omit to disable it. */
    advance?: AdvanceConfig;
    /** Recolour or re-label individual rails. */
    brands?: Partial<Record<PaymentMethod, Partial<PaymentBrand>>>;
    /** Override the default method names. */
    labels?: Partial<Record<PaymentMethod, string>>;
}
declare function PaymentDialog({ open, onOpenChange, options, amountLabel, summary, onConfirm, placing, initialPaymentMethod, branding, advance, brands: brandOverrides, labels: labelOverrides, }: PaymentDialogProps): react__default.JSX.Element;

declare function useBdPaymentConfig(): BdPaymentConfig;
/**
 * Optional provider. Wrapping your app (or just your checkout) means you never
 * have to import the CSS file yourself — the scoped stylesheet is injected for
 * you, and any `theme` you pass is applied on top.
 *
 * ```tsx
 * <BdPaymentProvider config={{ theme: { primary: "#E2136E" } }}>
 *   <Checkout />
 * </BdPaymentProvider>
 * ```
 */
declare function BdPaymentProvider({ children, config, }: {
    children: ReactNode;
    config?: BdPaymentConfig;
}): react.JSX.Element;

interface UsePaymentDialogOptions {
    /**
     * Runs when the buyer confirms. If it returns a promise, the dialog shows its
     * "Placing order…" state until the promise settles, then closes on success.
     */
    onConfirm?: (result: PaymentResult) => void | Promise<void>;
    /** Keep the dialog open after a successful confirm (default: close it). */
    keepOpenOnConfirm?: boolean;
}
/**
 * Wiring helper for <PaymentDialog>. Manages open + `placing` state and the
 * async confirm handshake, so opening checkout is a one-liner:
 *
 * ```tsx
 * const pay = usePaymentDialog({ onConfirm: (r) => api.placeOrder(r) });
 * // <button onClick={() => pay.open()}>Pay now</button>
 * // <PaymentDialog options={...} amountLabel={...} summary={...} {...pay.dialogProps} />
 * ```
 */
declare function usePaymentDialog(options?: UsePaymentDialogOptions): {
    /** Whether the dialog is open. */
    isOpen: boolean;
    /** Open the dialog. */
    open: () => void;
    /** Close the dialog. */
    close: () => void;
    /** Directly control open state. */
    setOpen: react.Dispatch<react.SetStateAction<boolean>>;
    /** True while an async confirm is in flight. */
    placing: boolean;
    /** The most recent confirmed result. */
    result: PaymentResult | null;
    /** Spread onto <PaymentDialog />. */
    dialogProps: {
        open: boolean;
        onOpenChange: react.Dispatch<react.SetStateAction<boolean>>;
        placing: boolean;
        onConfirm: (r: PaymentResult) => Promise<void>;
    };
};

/**
 * Brand identity for each payment method.
 *
 * We deliberately draw our own marks instead of bundling the providers' logo
 * files — those are trademarked assets with their own usage rules, and a
 * missing/renamed image would leave a broken checkout. Each method gets its
 * official brand colour and a clean wordmark tile, which reads as authentic
 * without shipping anyone's artwork.
 *
 * If you license the real logos, set `logoUrl` on the option (or override the
 * brand) and it replaces the tile automatically.
 */
declare const PAYMENT_BRANDS: Record<PaymentMethod, PaymentBrand>;
/** Merge caller overrides on top of the defaults, per method. */
declare function resolveBrands(overrides?: Partial<Record<PaymentMethod, Partial<PaymentBrand>>>): Record<PaymentMethod, PaymentBrand>;
/**
 * The square brand tile shown beside each method. Uses the given logo when one
 * exists, otherwise a gradient chip with the wordmark.
 */
declare function PaymentBrandMark({ brand, logoUrl, size, className, }: {
    brand: PaymentBrand;
    logoUrl?: string;
    size?: "sm" | "md" | "lg";
    className?: string;
}): react.JSX.Element;

/** Default human-readable name for each rail. Override per-option via `label`. */
declare const PAYMENT_METHOD_LABELS: Record<PaymentMethod, string>;

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
interface TrxIdConstraints {
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
/**
 * Understands the shapes we actually use in config:
 *   ^[A-Z0-9]{10}$      → exactly 10
 *   ^[A-Z0-9]{6,20}$    → between 6 and 20
 *   ^[A-Z0-9-]+$        → one or more
 * Anything more exotic falls back to permissive limits and leaves the real
 * check to the full-pattern test (and the server).
 */
declare function parseTrxIdConstraints(pattern: string | undefined): TrxIdConstraints;
/**
 * Clean a keystroke-by-keystroke value: strip disallowed characters, apply
 * casing, and cut at the maximum length so the field can never hold more than
 * the provider issues.
 */
declare function sanitiseTrxId(raw: string, constraints: TrxIdConstraints): string;
/**
 * Pull the ID out of pasted text.
 *
 * Buyers rarely paste a bare ID — they long-press the SMS and get something
 * like `"...Fee Tk 0.00. TrxID 9F7A2B1C3D at 12/07/2026"`. Naively filtering
 * that would splice the label into the value ("TRXID9F7A2"), so we look for the
 * labelled token first, then fall back to the longest token that fits the
 * method's own length rules.
 */
declare function extractTrxId(raw: string, pattern: string | undefined, constraints: TrxIdConstraints): string;
/** Full validity check — used to gate the Continue button. */
declare function isValidTrxId(value: string, pattern: string | undefined, constraints: TrxIdConstraints): boolean;

/**
 * Expand an admin-authored payment-instruction template into display lines.
 *
 * Supports `{{amount}}`, `{{number}}` and `{{orderNumber}}` placeholders, then
 * splits on newlines and drops blank lines.
 */
declare function renderInstructions(template: string, vars: {
    amount: string;
    number: string;
    orderNumber?: string;
}): string[];

export { type AdvanceConfig, type BdPaymentConfig, BdPaymentProvider, type BrandingConfig, PAYMENT_BRANDS, PAYMENT_METHOD_LABELS, type PaymentBrand, PaymentBrandMark, PaymentDialog, type PaymentDialogProps, type PaymentMethod, type PaymentOption, type PaymentResult, type PaymentTheme, type SummaryRow, type TrxIdConstraints, type UsePaymentDialogOptions, extractTrxId, isValidTrxId, parseTrxIdConstraints, renderInstructions, resolveBrands, sanitiseTrxId, useBdPaymentConfig, usePaymentDialog };
