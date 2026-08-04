# bd-payments demo

A landing page that showcases [`@hellokit/bd-payments`](../packages/bd-payments) with a live, working demo storefront — a product grid with a cart, checkout via bKash / Nagad / Bank / COD (with the advance flow and a theme switcher), a post-payment callback payload viewer, and on-page API documentation.

## Getting started

From this `demo/` folder:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

`@hellokit/bd-payments` is consumed as a local `file:../packages/bd-payments`
dependency, so make sure the package is built first (its `dist/` is committed,
but to rebuild):

```bash
cd ../packages/bd-payments && npm install && npm run build
```

## Where the example lives

- `app/layout.tsx` — imports the package stylesheet once.
- `app/Storefront.tsx` — the interactive client component: a product grid +
  cart, `usePaymentDialog`, `PaymentDialog`, and `BdPaymentProvider` for
  theming.
- `app/CallbackPanel.tsx` — shows the `PaymentResult` payload `onConfirm`
  received after a successful order, standing in for what your own
  backend/webhook would get.
- `app/Docs.tsx` — on-page documentation (quick start, props tables, the
  `PaymentResult` callback shape).
- `app/payment-options.ts` — the demo store's payment options.
- `app/MainPageClient.tsx` / `app/page.tsx` — the landing page.
