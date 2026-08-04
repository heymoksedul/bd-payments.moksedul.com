# @hellokit/bd-payments

![bd-payments screenshot](https://edge.moksedul.com/images/1785822488241-bd-payments.webp)

A clean, professional, fully customizable multi-step **payment dialog** for Bangladeshi checkouts — bKash, Nagad, Rocket, Bank Transfer, Card and Cash on Delivery. Framework-agnostic React, themeable via CSS variables, and trivial to hook into any order flow.

## Features

- 🧭 **Guided 3-step flow** — Method → Details → Review & confirm, with a Cash-on-Delivery advance option.
- 🎨 **Fully themeable** — every colour is a `--bdp-*` CSS variable; light/dark out of the box, override with a `theme` prop.
- 🔒 **Scoped styles** — the whole stylesheet is namespaced under `.bd-payments-scope`, so it looks identical in any app and never leaks.
- 🧾 **Smart Transaction-ID input** — derives allowed characters and length from your regex, and extracts the ID out of a pasted confirmation SMS.
- 🪝 **Hookable** — `usePaymentDialog()` wires open state and the async "placing order" handshake for you.
- 🏷️ **Nothing hardcoded** — title, logo, advance amount, currency, labels and brand colours are all props.
- 🎨 **Built-in Assets** — gorgeous, optimized inline SVG logos for all 8 payment methods (bKash, Nagad, Rocket, Upay, CellFin, Bank, Card, COD) encoded directly. No external image requests.
- 📦 **Lightweight** — no Next.js dependency; ships CJS, ESM and full TypeScript types.

## Installation

```bash
npm install @hellokit/bd-payments
# or
pnpm add @hellokit/bd-payments
```

## Quick start

### 1. Provide the styles (recommended)

Wrap your app — or just your checkout — in `<BdPaymentProvider>`. It injects the scoped stylesheet, so you don't need to import any CSS.

```tsx
import { BdPaymentProvider } from "@hellokit/bd-payments";

export default function RootLayout({ children }) {
  return <BdPaymentProvider>{children}</BdPaymentProvider>;
}
```

> Prefer a plain CSS import? Skip the provider and add `import "@hellokit/bd-payments/dist/index.css";` once at your entry point instead.

### 2. Open the dialog

```tsx
import { PaymentDialog, usePaymentDialog } from "@hellokit/bd-payments";

function Checkout() {
  const pay = usePaymentDialog({
    onConfirm: async (result) => {
      // result = { method, transactionId?, senderNumber?, isAdvance? }
      await api.placeOrder(result);
    },
  });

  return (
    <>
      <button onClick={pay.open}>Pay Tk 1,299</button>

      <PaymentDialog
        {...pay.dialogProps}
        amountLabel="Tk 1,299"
        summary={[
          { label: "Subtotal", value: "Tk 1,199" },
          { label: "Delivery", value: "Tk 100" },
          { label: "Total", value: "Tk 1,299" },
        ]}
        options={[
          {
            method: "BKASH",
            accountNumber: "017XXXXXXXX",
            accountType: "PERSONAL",
            requireTransactionId: true,
            transactionIdPattern: "^[A-Z0-9]{10}$",
            instructions:
              "Open bKash → Send Money\nSend {{amount}} to {{number}}\nCopy the TrxID from the SMS",
          },
          {
            method: "NAGAD",
            accountNumber: "017XXXXXXXX",
            requireTransactionId: true,
          },
          { method: "COD" },
        ]}
        advance={{ enabled: true, amountLabel: "Tk 500" }}
      />
    </>
  );
}
```

## Theming

Pass any subset of theme tokens; they map straight to the `--bdp-*` variables and apply even though the dialog renders through a portal.

```tsx
<BdPaymentProvider
  config={{
    theme: {
      primary: "#E2136E",
      primaryForeground: "#ffffff",
      background: "#ffffff",
      foreground: "#0f172a",
      muted: "#f1f5f9",
      border: "#e2e8f0",
    },
    colorScheme: "light", // or "dark", or omit to follow a `.dark` ancestor
  }}
>
  {children}
</BdPaymentProvider>
```

## Configuration

### `<PaymentDialog />` props

| Prop                   | Type                                                    | Description                                                    |
| ---------------------- | ------------------------------------------------------- | -------------------------------------------------------------- |
| `open`                 | `boolean`                                               | Whether the dialog is open.                                    |
| `onOpenChange`         | `(open: boolean) => void`                               | Open-state callback.                                           |
| `options`              | `PaymentOption[]`                                       | The rails you've enabled and their details.                    |
| `amountLabel`          | `string`                                                | Pre-formatted order total, e.g.`"Tk 1,299"`.                   |
| `summary`              | `{ label, value }[]`                                    | Rows shown on the review step.                                 |
| `onConfirm`            | `(result: PaymentResult) => void`                       | Fired when the buyer confirms.                                 |
| `placing`              | `boolean`                                               | Show the "Placing order…" state (handled for you by the hook). |
| `initialPaymentMethod` | `PaymentMethod \| null`                                 | Pre-select a rail; pass`"COD"` to open the COD flow.           |
| `branding`             | `BrandingConfig`                                        | `title`, `subtitle`, `logoUrl`, `secureNote`.                  |
| `advance`              | `AdvanceConfig`                                         | Optional COD advance:`{ enabled, amountLabel, description? }`. |
| `brands`               | `Partial<Record<PaymentMethod, Partial<PaymentBrand>>>` | Recolour / re-label individual rails.                          |
| `labels`               | `Partial<Record<PaymentMethod, string>>`                | Override default method names.                                 |

### `PaymentOption`

```ts
interface PaymentOption {
  method:
    | "COD"
    | "BKASH"
    | "NAGAD"
    | "ROCKET"
    | "UPAY"
    | "CELLFIN"
    | "BANK_TRANSFER"
    | "CARD";
  label?: string;
  accountNumber?: string;
  accountName?: string;
  accountType?: "PERSONAL" | "AGENT" | "MERCHANT";
  logoUrl?: string; // real logo — replaces the built-in SVG brand tile
  bankName?: string; // bank transfer only
  branchName?: string;
  routingNumber?: string;
  instructions?: string; // {{amount}} / {{number}} / {{orderNumber}}
  requireTransactionId?: boolean;
  transactionIdPattern?: string; // e.g. "^[A-Z0-9]{10}$"
  requireSenderNumber?: boolean; // block Continue until the buyer's own number is entered
  senderNumberPattern?: string; // e.g. "^\d{10,17}$" for a bank account
  sortOrder?: number;
}
```

### Requiring the buyer's own sender number

`accountNumber` is *your* receiving account. `requireSenderNumber` / `senderNumberPattern` validate the buyer's own wallet or bank account — the number they paid *from* — the same way `requireTransactionId` / `transactionIdPattern` validate the Transaction ID.

Wallet rails (bKash, Nagad, Rocket, Upay, CellFin) default to the standard 11-digit BD mobile shape (`^01[3-9]\d{8}$`) when you don't set a pattern. Bank account numbers have no universal shape across banks, so `BANK_TRANSFER` needs its own pattern if you want it enforced:

```ts
{
  method: "BKASH",
  accountNumber: "017XXXXXXXX",
  requireTransactionId: true,
  transactionIdPattern: "^[A-Z0-9]{10}$",
  requireSenderNumber: true, // uses the built-in 11-digit BD mobile pattern
},
{
  method: "BANK_TRANSFER",
  bankName: "BRAC Bank",
  accountNumber: "1501 2039 4857 001",
  requireTransactionId: true,
  requireSenderNumber: true,
  senderNumberPattern: "^\\d{10,17}$", // set this to match your bank's account format
},
```

## Controlled usage (without the hook)

```tsx
const [open, setOpen] = useState(false);
const [placing, setPlacing] = useState(false);

<PaymentDialog
  open={open}
  onOpenChange={setOpen}
  placing={placing}
  onConfirm={handleConfirm}
  amountLabel="Tk 1,299"
  summary={summary}
  options={options}
/>;
```

## Exports

- `PaymentDialog`, `BdPaymentProvider`, `usePaymentDialog`
- `PAYMENT_BRANDS`, `PaymentBrandMark`, `resolveBrands`, `PAYMENT_METHOD_LABELS`
- `parseTrxIdConstraints`, `isValidTrxId`, `sanitiseTrxId`, `extractTrxId`, `renderInstructions`
- `parseSenderNumberConstraints`, `isValidSenderNumber`, `sanitiseSenderNumber`, `defaultSenderNumberPattern`, `BD_MOBILE_SENDER_PATTERN`
- Types: `PaymentMethod`, `PaymentOption`, `PaymentResult`, `SummaryRow`, `AdvanceConfig`, `BrandingConfig`, `PaymentBrand`, `PaymentTheme`, `BdPaymentConfig`

## Development

```bash
pnpm install
pnpm --filter @hellokit/bd-payments build   # builds scoped CSS + JS/types
```

The build runs Tailwind v4, namespaces every rule under `.bd-payments-scope` (`scripts/build-css.js`), inlines the result into `src/styles.ts`, then bundles with `tsup`.

## License

MIT
