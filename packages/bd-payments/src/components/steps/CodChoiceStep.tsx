"use client";

import { ChevronRight, Clock, CreditCard } from "lucide-react";

interface Props {
  advanceAmountLabel: string;
  description?: string;
  onPayAdvance: () => void;
  onPayLater: () => void;
}

/** COD sub-step — pay an advance online now, or confirm and pay later. */
export function CodChoiceStep({
  advanceAmountLabel,
  description,
  onPayAdvance,
  onPayLater,
}: Props) {
  return (
    <div className="flex flex-col gap-4">
      <div
        className="rounded-xl border p-3.5 text-xs"
        style={{
          borderColor: "var(--bdp-warning-border)",
          backgroundColor: "var(--bdp-warning-bg)",
          color: "var(--bdp-warning-fg)",
        }}
      >
        <p className="mb-1 text-sm font-bold" style={{ color: "var(--bdp-warning-title)" }}>Cash on Delivery Options</p>
        <p>
          {description ??
            `You can pay a ${advanceAmountLabel} advance online now to confirm immediately, or place the order now and pay later.`}
        </p>
      </div>

      <div className="flex flex-col gap-2.5">
        <button
          type="button"
          onClick={onPayAdvance}
          className="flex cursor-pointer items-center gap-3.5 rounded-xl border border-(--bdp-primary)/40 bg-(--bdp-primary)/5 p-3.5 text-left transition-all hover:border-(--bdp-primary) hover:bg-(--bdp-primary)/10"
        >
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-(--bdp-primary) text-(--bdp-primary-fg)">
            <CreditCard className="size-5" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-bold text-(--bdp-fg)">
              Pay Advance Now ({advanceAmountLabel})
            </p>
            <p className="text-xs text-(--bdp-muted-fg)">
              Pay {advanceAmountLabel} now via an online method to confirm instantly.
            </p>
          </div>
          <ChevronRight className="size-4 shrink-0 text-(--bdp-primary)" />
        </button>

        <button
          type="button"
          onClick={onPayLater}
          className="flex cursor-pointer items-center gap-3.5 rounded-xl border border-(--bdp-border) p-3.5 text-left transition-all hover:bg-(--bdp-muted)"
        >
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-(--bdp-muted) text-(--bdp-muted-fg)">
            <Clock className="size-5" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-(--bdp-fg)">
              Confirm Order (Pay Later)
            </p>
            <p className="text-xs text-(--bdp-muted-fg)">
              Place the order now and verify payment details later.
            </p>
          </div>
          <ChevronRight className="size-4 shrink-0 text-(--bdp-muted-fg)" />
        </button>
      </div>
    </div>
  );
}
