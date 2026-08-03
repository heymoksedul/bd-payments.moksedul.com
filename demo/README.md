# bd-payments demo

A landing page that showcases [`@hellokit/bd-payments`](../packages/bd-payments) with a live, working payment dialog — online rails (bKash / Nagad / Bank), the Cash-on-Delivery advance flow, and a theme switcher.

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
- `app/PaymentDemo.tsx` — the interactive client component: `usePaymentDialog`,
  `PaymentDialog`, and `BdPaymentProvider` for theming.
- `app/payment-options.ts` — the demo store's payment options.
- `app/page.tsx` — the landing page.
