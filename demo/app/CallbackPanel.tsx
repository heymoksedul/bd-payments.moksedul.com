"use client";

import type { PaymentResult } from "@hellokit/bd-payments";
import { Check, Copy, Radio } from "lucide-react";
import { useState } from "react";

/**
 * Simulates what a real backend/webhook receives after a successful order —
 * this library has no server of its own, so this panel makes that boundary
 * visible: everything above the line is the dialog, everything here is the
 * payload your own `onConfirm` handler gets to act on.
 */
export function CallbackPanel({
  result,
  placedAt,
}: {
  result: PaymentResult;
  placedAt: Date;
}) {
  const [copied, setCopied] = useState(false);
  const payload = JSON.stringify(
    { event: "order.confirmed", placedAt: placedAt.toISOString(), ...result },
    null,
    2,
  );

  function copy() {
    navigator.clipboard.writeText(payload);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  return (
    <section className="mt-6 overflow-hidden rounded-2xl border border-emerald-200 bg-emerald-50/60 shadow-xs dark:border-emerald-900/40 dark:bg-emerald-950/20">
      <div className="flex items-center justify-between gap-3 border-b border-emerald-200/80 px-5 py-3 dark:border-emerald-900/40">
        <div className="flex items-center gap-2">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            <Radio className="size-3.5" />
            onConfirm callback fired
          </span>
        </div>
        <button
          onClick={copy}
          className="flex cursor-pointer items-center gap-1.5 rounded-lg border border-emerald-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-emerald-700 transition-colors hover:bg-emerald-50 dark:border-emerald-900/50 dark:bg-zinc-900 dark:text-emerald-400 dark:hover:bg-zinc-800"
        >
          {copied ? (
            <Check className="size-3" />
          ) : (
            <Copy className="size-3" />
          )}
          {copied ? "Copied" : "Copy JSON"}
        </button>
      </div>
      <div className="px-5 py-4">
        <p className="mb-3 text-xs leading-relaxed text-emerald-800/80 dark:text-emerald-300/70">
          This is the exact <code className="rounded bg-emerald-500/10 px-1 py-0.5 font-mono">PaymentResult</code>{" "}
          your <code className="rounded bg-emerald-500/10 px-1 py-0.5 font-mono">onConfirm</code> handler received —
          the payload you&apos;d forward to your own order/verification API. This library never talks to a server itself;
          it only hands you this object.
        </p>
        <pre className="overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-[11px] leading-relaxed text-emerald-300 dark:bg-black/40">
          <code>{payload}</code>
        </pre>
      </div>
    </section>
  );
}
