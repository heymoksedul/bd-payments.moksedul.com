import type { PaymentMethod } from "../types";

/** Default human-readable name for each rail. Override per-option via `label`. */
export const PAYMENT_METHOD_LABELS: Record<PaymentMethod, string> = {
  COD: "Cash on Delivery",
  BKASH: "bKash",
  NAGAD: "Nagad",
  ROCKET: "Rocket",
  UPAY: "Upay",
  CELLFIN: "CellFin",
  BANK_TRANSFER: "Bank Transfer",
  CARD: "Card",
};
