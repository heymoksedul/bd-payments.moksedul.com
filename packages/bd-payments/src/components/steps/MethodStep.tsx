"use client";

import { ChevronRight, Loader2, ShieldCheck, Sparkles } from "lucide-react";
import { cn } from "../../lib/cn";
import type { PaymentBrand, PaymentMethod, PaymentOption } from "../../types";
import { PaymentBrandMark } from "../payment-brands";

interface Props {
  isAdvanceMode: boolean;
  advanceHint?: string;
  options: PaymentOption[];
  brands: Record<PaymentMethod, PaymentBrand>;
  labelFor: (opt: PaymentOption) => string;
  busy: PaymentMethod | "step" | null;
  secureNote?: string | null;
  onChoose: (method: PaymentMethod) => void;
}

/** Step 1 — pick a payment method. */
export function MethodStep({
  isAdvanceMode,
  advanceHint,
  options,
  brands,
  labelFor,
  busy,
  secureNote,
  onChoose,
}: Props) {
  return (
    <div className="flex flex-col gap-2.5">
      {isAdvanceMode && advanceHint && (
        <div className="mb-1 flex items-center gap-2 rounded-xl border border-(--bdp-primary)/20 bg-(--bdp-primary)/10 p-3 text-xs font-medium text-(--bdp-primary)">
          <Sparkles className="size-4 shrink-0" />
          <span>{advanceHint}</span>
        </div>
      )}

      {options.length === 0 && (
        <p className="py-6 text-center text-sm text-(--bdp-muted-fg)">
          No payment methods are available right now. Please contact support.
        </p>
      )}
      <div className="bdp-scrollbar flex max-h-[300px] flex-col gap-2.5 overflow-y-auto pr-1">
        {options.map((opt) => {
          const b = brands[opt.method];
          const loading = busy === opt.method;

          return (
            <button
              key={opt.method}
              type="button"
              disabled={!!busy}
              onClick={() => onChoose(opt.method)}
              style={
                loading
                  ? { borderColor: b.color, background: `${b.color}0D` }
                  : undefined
              }
              className={cn(
                "group flex cursor-pointer items-center gap-3 rounded-xl border border-(--bdp-border) p-3 text-left transition-all",
                !busy && "hover:bg-(--bdp-muted)",
                busy && !loading && "opacity-40",
              )}
            >
              <PaymentBrandMark brand={b} logoUrl={opt.logoUrl} />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-(--bdp-fg)">
                  {labelFor(opt)}
                </p>
                <p className="truncate text-xs text-(--bdp-muted-fg)">
                  {loading ? "Connecting…" : b.tagline}
                </p>
              </div>
              {loading ? (
                <Loader2
                  className="size-4 shrink-0 animate-spin"
                  style={{ color: b.color }}
                />
              ) : (
                <ChevronRight className="size-4 shrink-0 text-(--bdp-muted-fg) transition-transform group-hover:translate-x-0.5" />
              )}
            </button>
          );
        })}
      </div>

      {secureNote && (
        <p className="mt-2 flex items-center justify-center gap-1.5 text-[11px] text-(--bdp-muted-fg)">
          <ShieldCheck className="size-3.5" />
          {secureNote}
        </p>
      )}
    </div>
  );
}
