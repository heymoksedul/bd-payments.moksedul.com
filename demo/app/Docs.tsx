"use client";

import { BookOpen, Check, Copy } from "lucide-react";
import { useState } from "react";

const QUICK_START = `import {
  PaymentDialog,
  usePaymentDialog,
} from "@hellokit/bd-payments";
import "@hellokit/bd-payments/dist/index.css";

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
        summary={[{ label: "Total", value: "Tk 1,299" }]}
        options={[
          {
            method: "BKASH",
            accountNumber: "017XXXXXXXX",
            requireTransactionId: true,
            transactionIdPattern: "^[A-Z0-9]{10}$",
            requireSenderNumber: true, // buyer's own bKash number
          },
          { method: "COD" },
        ]}
        advance={{ enabled: true, amountLabel: "Tk 500" }}
      />
    </>
  );
}`;

const RESULT_SHAPE = `interface PaymentResult {
  method: PaymentMethod;
  transactionId?: string;   // buyer-entered TrxID
  senderNumber?: string;    // buyer's own wallet/bank number
  isAdvance?: boolean;      // true if this was a COD advance
}`;

const OPTION_PROPS: { name: string; type: string; note: string }[] = [
  { name: "method", type: "PaymentMethod", note: "BKASH, NAGAD, ROCKET, UPAY, CELLFIN, BANK_TRANSFER, CARD, COD" },
  { name: "accountNumber", type: "string?", note: "your receiving wallet / bank account" },
  { name: "accountName / accountType", type: "string?", note: "shown alongside the account number" },
  { name: "bankName / branchName / routingNumber", type: "string?", note: "bank transfer only" },
  { name: "instructions", type: "string?", note: "supports {{amount}} {{number}} {{orderNumber}}" },
  { name: "requireTransactionId", type: "boolean?", note: "blocks Continue until a TrxID is entered" },
  { name: "transactionIdPattern", type: "string?", note: 'e.g. "^[A-Z0-9]{10}$" — drives length/char limits' },
  { name: "requireSenderNumber", type: "boolean?", note: "blocks Continue until the buyer's own number is entered" },
  { name: "senderNumberPattern", type: "string?", note: 'e.g. "^\\\\d{10,17}$" for a bank account; wallets default to BD mobile format' },
  { name: "logoUrl", type: "string?", note: "replaces the built-in brand tile" },
];

const DIALOG_PROPS: { name: string; type: string; note: string }[] = [
  { name: "options", type: "PaymentOption[]", note: "the rails you've enabled" },
  { name: "amountLabel", type: "string", note: 'pre-formatted total, e.g. "Tk 1,299"' },
  { name: "summary", type: "{ label, value }[]", note: "rows shown on the review step" },
  { name: "onConfirm", type: "(result) => void | Promise<void>", note: "fired when the buyer confirms" },
  { name: "advance", type: "AdvanceConfig?", note: "optional COD \"pay an advance now\" flow" },
  { name: "branding", type: "BrandingConfig?", note: "title, subtitle, logo, secure note" },
  { name: "brands / labels", type: "Partial<Record<...>>?", note: "recolour or rename individual rails" },
];

function CodeBlock({ code, label }: { code: string; label: string }) {
  const [copied, setCopied] = useState(false);
  function copy() {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-xs dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <span className="font-mono text-[11px] text-slate-400">{label}</span>
        <button
          onClick={copy}
          className="flex cursor-pointer items-center gap-1.5 rounded-md px-2 py-1 text-[11px] font-semibold text-slate-300 transition-colors hover:bg-white/10"
        >
          {copied ? <Check className="size-3" /> : <Copy className="size-3" />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-slate-200 dark:text-zinc-300">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function PropsTable({ rows }: { rows: { name: string; type: string; note: string }[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-zinc-800">
      <table className="w-full min-w-[520px] text-left text-xs">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50 dark:border-zinc-800 dark:bg-zinc-900">
            <th className="px-3.5 py-2.5 font-semibold text-slate-600 dark:text-zinc-300">Prop</th>
            <th className="px-3.5 py-2.5 font-semibold text-slate-600 dark:text-zinc-300">Type</th>
            <th className="px-3.5 py-2.5 font-semibold text-slate-600 dark:text-zinc-300">Notes</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.name}
              className={i !== rows.length - 1 ? "border-b border-slate-100 dark:border-zinc-900" : ""}
            >
              <td className="px-3.5 py-2.5 font-mono font-semibold text-slate-900 dark:text-zinc-100">
                {row.name}
              </td>
              <td className="px-3.5 py-2.5 font-mono text-indigo-600 dark:text-indigo-400">
                {row.type}
              </td>
              <td className="px-3.5 py-2.5 text-slate-500 dark:text-zinc-400">{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Docs() {
  return (
    <section className="mb-20">
      <div className="mb-6 flex items-center gap-2">
        <BookOpen className="size-4 text-indigo-500" />
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-400">
          Documentation
        </h2>
      </div>

      <div className="flex flex-col gap-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-[#111622] sm:p-8">
        <div>
          <h3 className="mb-3 text-sm font-bold text-slate-900 dark:text-white">
            Quick start
          </h3>
          <CodeBlock code={QUICK_START} label="Checkout.tsx" />
        </div>

        <div>
          <h3 className="mb-3 text-sm font-bold text-slate-900 dark:text-white">
            <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[13px] dark:bg-zinc-800">
              PaymentOption
            </code>{" "}
            — one payment rail
          </h3>
          <PropsTable rows={OPTION_PROPS} />
        </div>

        <div>
          <h3 className="mb-3 text-sm font-bold text-slate-900 dark:text-white">
            <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[13px] dark:bg-zinc-800">
              {"<PaymentDialog />"}
            </code>{" "}
            — key props
          </h3>
          <PropsTable rows={DIALOG_PROPS} />
        </div>

        <div>
          <h3 className="mb-3 text-sm font-bold text-slate-900 dark:text-white">
            The callback —{" "}
            <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[13px] dark:bg-zinc-800">
              PaymentResult
            </code>
          </h3>
          <p className="mb-3 text-xs leading-relaxed text-slate-500 dark:text-zinc-400">
            This is everything <code className="font-mono">onConfirm</code> receives once the buyer confirms.
            There&apos;s no gateway integration or webhook baked into this library — this object <em>is</em> the
            handoff point to your own backend, which is responsible for actually verifying the payment.
          </p>
          <CodeBlock code={RESULT_SHAPE} label="types.ts" />
        </div>
      </div>
    </section>
  );
}
