"use client";

import type { PaymentBrand, PaymentOption, SummaryRow } from "../../types";
import { PaymentBrandMark } from "../payment-brands";

interface Props {
  selected: PaymentOption;
  brand: PaymentBrand;
  label: string;
  transactionId: string;
  senderNumber?: string;
  summary: SummaryRow[];
  needsTrxId: boolean;
}

/** Step 3 — review the chosen method + order recap before confirming. */
export function ReviewStep({
  selected,
  brand,
  label,
  transactionId,
  senderNumber,
  summary,
  needsTrxId,
}: Props) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col divide-y divide-(--bdp-border) rounded-xl border border-(--bdp-border)">
        <div className="flex items-center gap-3 p-3">
          <PaymentBrandMark brand={brand} logoUrl={selected.logoUrl} size="sm" />
          <div className="min-w-0">
            <p className="text-sm font-semibold text-(--bdp-fg)">{label}</p>
            {transactionId && (
              <p className="truncate font-mono text-xs text-(--bdp-muted-fg)">
                {transactionId.toUpperCase()}
              </p>
            )}
            {senderNumber && (
              <p className="truncate font-mono text-xs text-(--bdp-muted-fg)">
                From: {senderNumber}
              </p>
            )}
          </div>
        </div>
        {summary.map((row) => (
          <div key={row.label} className="flex items-start justify-between gap-4 p-3">
            <span className="text-xs text-(--bdp-muted-fg)">{row.label}</span>
            <span className="text-right text-xs font-medium text-(--bdp-fg)">
              {row.value}
            </span>
          </div>
        ))}
      </div>

      {needsTrxId && (
        <p className="rounded-xl bg-(--bdp-muted) px-3.5 py-3 text-xs leading-relaxed text-(--bdp-muted-fg)">
          We&apos;ll check this Transaction ID against our {label} account and confirm
          your order.
        </p>
      )}
    </div>
  );
}
