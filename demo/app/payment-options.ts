import type { PaymentOption, SummaryRow } from "@hellokit/bd-payments";

/** The rails this demo store has switched on. */
export const OPTIONS: PaymentOption[] = [
  {
    method: "BKASH",
    accountNumber: "017 1234 5678",
    accountType: "PERSONAL",
    requireTransactionId: true,
    transactionIdPattern: "^[A-Z0-9]{10}$",
    requireSenderNumber: true,
    instructions:
      "Open the bKash app and tap Send Money\nSend {{amount}} to {{number}}\nCopy the Transaction ID from the confirmation SMS\nPaste it below to confirm your order",
  },
  {
    method: "NAGAD",
    accountNumber: "017 1234 5678",
    accountType: "PERSONAL",
    requireTransactionId: true,
    transactionIdPattern: "^[A-Z0-9]{10}$",
    instructions:
      "Open Nagad and tap Send Money\nSend {{amount}} to {{number}}\nCopy the TxnID from the SMS and paste it below",
  },
  {
    method: "ROCKET",
    accountNumber: "017 1234 5678-9",
    accountType: "PERSONAL",
    requireTransactionId: true,
    transactionIdPattern: "^[A-Z0-9]{10}$",
    instructions:
      "Open Rocket app and tap Send Money\nSend {{amount}} to {{number}}\nCopy the Transaction ID from the SMS and paste below",
  },
  {
    method: "UPAY",
    accountNumber: "017 1234 5678",
    accountType: "PERSONAL",
    requireTransactionId: true,
    transactionIdPattern: "^[A-Z0-9]{10}$",
    instructions:
      "Open Upay app and tap Send Money\nSend {{amount}} to {{number}}\nEnter the TxnID from your SMS below",
  },
  {
    method: "BANK_TRANSFER",
    bankName: "BRAC Bank",
    accountNumber: "1501 2039 4857 001",
    accountName: "Moksedul Islam",
    branchName: "Gulshan",
    routingNumber: "060270516",
    requireTransactionId: true,
    transactionIdPattern: "^[A-Z0-9-]{6,20}$",
    requireSenderNumber: true,
    senderNumberPattern: "^\\d{10,17}$",
    instructions:
      "Transfer {{amount}} to the account shown above\nEnter the reference number from your receipt below",
  },
  {
    method: "CELLFIN",
    accountNumber: "017 1234 5678",
    accountType: "PERSONAL",
    requireTransactionId: true,
    transactionIdPattern: "^[A-Z0-9]{10}$",
    instructions:
      "Open CellFin app and tap Send Money\nSend {{amount}} to {{number}}\nCopy the Transaction ID from the SMS and paste below",
  },
  { method: "COD" },
];

/** Order recap shown on the review step. */
export const SUMMARY: SummaryRow[] = [
  { label: "NFC Card × 1", value: "Tk 1,199" },
  { label: "Delivery", value: "Tk 100" },
  { label: "Total", value: "Tk 1,299" },
];

export const AMOUNT_LABEL = "Tk 1,299";
