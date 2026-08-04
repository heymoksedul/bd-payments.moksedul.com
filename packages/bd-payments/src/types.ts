/**
 * Public types for @hellokit/bd-payments.
 *
 * The dialog knows about the six payment rails commonly used by Bangladeshi
 * stores, but every label, brand colour, logo, instruction and flow detail is
 * data you pass in — nothing about your store is baked into the component.
 */

/** The payment rails the dialog understands. */
export type PaymentMethod =
  | "COD"
  | "BKASH"
  | "NAGAD"
  | "ROCKET"
  | "UPAY"
  | "CELLFIN"
  | "BANK_TRANSFER"
  | "CARD";

/**
 * One payment option your store has switched on. Everything except `method`
 * is optional, so the simplest possible option is `{ method: "BKASH" }`.
 */
export interface PaymentOption {
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
  /**
   * When true the Continue button is blocked until the buyer's own
   * sender number (the wallet/bank account they paid *from*) is entered.
   */
  requireSenderNumber?: boolean;
  /**
   * Regex the sender number must satisfy, e.g. `^\d{10,17}$` for a bank
   * account. Wallet rails (bKash/Nagad/Rocket/Upay/CellFin) default to the
   * standard 11-digit BD mobile shape when this is omitted; bank transfer
   * and card have no universal shape, so set this yourself if you want a
   * strict check for your bank.
   */
  senderNumberPattern?: string;
  sortOrder?: number;
}

/** A single label/value row shown in the review recap. */
export interface SummaryRow {
  label: string;
  value: string;
}

/** What `onConfirm` receives once the buyer confirms. */
export interface PaymentResult {
  method: PaymentMethod;
  transactionId?: string;
  senderNumber?: string;
  /** True when the buyer chose to pay the advance instead of the full amount. */
  isAdvance?: boolean;
}

/** Optional Cash-on-Delivery advance flow. Omit to disable the advance choice. */
export interface AdvanceConfig {
  /** Show the "pay an advance now" choice for COD orders. */
  enabled: boolean;
  /** Formatted advance amount, e.g. "Tk 500". */
  amountLabel: string;
  /** Short blurb shown on the COD choice screen. */
  description?: string;
}

/** Header branding for the dialog. */
export interface BrandingConfig {
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
export interface PaymentBrand {
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
export interface PaymentTheme {
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
export interface BdPaymentConfig {
  theme?: PaymentTheme;
  /** Force a colour scheme instead of following the host's `.dark` class. */
  colorScheme?: "light" | "dark";
}
