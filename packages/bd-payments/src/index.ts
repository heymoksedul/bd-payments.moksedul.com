// @hellokit/bd-payments — public API

// Types
export type {
  PaymentMethod,
  PaymentOption,
  PaymentResult,
  SummaryRow,
  AdvanceConfig,
  BrandingConfig,
  PaymentBrand,
  PaymentTheme,
  BdPaymentConfig,
} from "./types";

// Main component
export { PaymentDialog, type PaymentDialogProps } from "./components/PaymentDialog";

// Provider + hook
export {
  BdPaymentProvider,
  useBdPaymentConfig,
} from "./components/BdPaymentProvider";
export {
  usePaymentDialog,
  type UsePaymentDialogOptions,
} from "./hooks/usePaymentDialog";

// Branding helpers (for advanced customization)
export {
  PAYMENT_BRANDS,
  PaymentBrandMark,
  resolveBrands,
} from "./components/payment-brands";
export { PAYMENT_METHOD_LABELS } from "./lib/labels";

// Validation utilities (useful for server-side checks too)
export {
  parseTrxIdConstraints,
  isValidTrxId,
  sanitiseTrxId,
  extractTrxId,
  type TrxIdConstraints,
} from "./lib/payment-validation";
export {
  parseSenderNumberConstraints,
  isValidSenderNumber,
  sanitiseSenderNumber,
  defaultSenderNumberPattern,
  BD_MOBILE_SENDER_PATTERN,
  type SenderNumberConstraints,
} from "./lib/sender-validation";
export { renderInstructions } from "./lib/payment-instructions";
