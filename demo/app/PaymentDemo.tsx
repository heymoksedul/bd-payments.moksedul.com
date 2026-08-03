"use client";

import {
  BdPaymentProvider,
  PaymentDialog,
  usePaymentDialog,
  type PaymentTheme,
} from "@hellokit/bd-payments";
import { CreditCard, Sparkles, Truck } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useTheme } from "./ThemeContext";
import { AMOUNT_LABEL, OPTIONS, SUMMARY } from "./payment-options";

type PresetKey = "indigo" | "bkash" | "emerald" | "midnight";

const PRESETS: Record<
  PresetKey,
  {
    label: string;
    swatch: string;
    theme?: PaymentTheme;
    colorScheme?: "light" | "dark";
  }
> = {
  indigo: { label: "Indigo", swatch: "#4f46e5" },
  bkash: {
    label: "bKash Pink",
    swatch: "#e2136e",
    theme: { primary: "#e2136e", primaryForeground: "#ffffff" },
  },
  emerald: {
    label: "Emerald",
    swatch: "#059669",
    theme: { primary: "#059669", primaryForeground: "#ffffff" },
  },
  midnight: {
    label: "Midnight Dark",
    swatch: "#6366f1",
    colorScheme: "dark",
    theme: { primary: "#6366f1" },
  },
};

export function PaymentDemo() {
  const { theme } = useTheme();
  const [preset, setPreset] = useState<PresetKey>("indigo");
  const [initialMethod, setInitialMethod] = useState<"ONLINE" | "COD">(
    "ONLINE",
  );

  const pay = usePaymentDialog({
    onConfirm: async () => {
      // Simulate a network request to place the order.
      await new Promise((r) => setTimeout(r, 1200));
    },
  });

  function openOnline() {
    setInitialMethod("ONLINE");
    pay.open();
  }
  function openCod() {
    setInitialMethod("COD");
    pay.open();
  }

  const active = PRESETS[preset];
  const effectiveColorScheme =
    active.colorScheme || (theme === "dark" ? "dark" : "light");

  return (
    <BdPaymentProvider
      config={{ theme: active.theme, colorScheme: effectiveColorScheme }}
    >
      <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:shadow-2xl dark:shadow-indigo-950/20 sm:p-8">
        {/* Top WooCommerce Product Card */}
        <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50/80 p-4 transition-colors dark:border-zinc-800/60 dark:bg-zinc-950/50">
          <Image
            width={64}
            height={64}
            unoptimized
            src="https://edge.moksedul.com/images/1785759363876-edited-image.webp"
            alt="Premium NFC Smart Card"
            className="size-16 shrink-0 rounded-xl border border-slate-200/80 bg-white object-cover p-1 shadow-xs dark:border-zinc-800 dark:bg-zinc-900"
          />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold text-slate-900 dark:text-zinc-100">
                Premium NFC Smart Card
              </p>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
                In Stock
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-zinc-400">
              WooCommerce Demo Item · Instant Digital Profile Sharing
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-400 line-through dark:text-zinc-500">
              Tk 1,499
            </p>
            <p className="text-base font-bold text-slate-900 sm:text-lg dark:text-white">
              {AMOUNT_LABEL}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <button
            onClick={openOnline}
            className="flex items-center justify-center gap-2 cursor-pointer rounded-xl bg-indigo-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:bg-indigo-700 hover:shadow-indigo-500/35 active:scale-[0.99] dark:bg-indigo-600 dark:hover:bg-indigo-500"
          >
            <CreditCard className="size-4" />
            <span>Pay Online · {AMOUNT_LABEL}</span>
          </button>
          <button
            onClick={openCod}
            className="flex items-center justify-center gap-2 cursor-pointer rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-800 shadow-xs transition-all hover:bg-slate-50 dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-100 dark:hover:bg-zinc-800"
          >
            <Truck className="size-4 text-slate-500 dark:text-zinc-400" />
            <span>Cash on Delivery</span>
          </button>
        </div>

        {/* Preset Theme Switcher */}
        <div className="mt-6 border-t border-slate-200/80 pt-5 dark:border-zinc-800/80">
          <div className="flex items-center justify-between mb-3">
            <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
              <Sparkles className="size-3.5 text-indigo-500" />
              <span>Dialog Presets & Themes</span>
            </p>
            <span className="text-[11px] text-slate-400 dark:text-zinc-500">
              CSS Themeable
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {(Object.keys(PRESETS) as PresetKey[]).map((key) => {
              const isSelected = preset === key;
              return (
                <button
                  key={key}
                  onClick={() => setPreset(key)}
                  className={`flex cursor-pointer items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all ${
                    isSelected
                      ? "border-indigo-600 bg-indigo-600 text-white shadow-sm dark:border-indigo-500 dark:bg-indigo-500"
                      : "border-slate-200 bg-slate-100/70 text-slate-700 hover:bg-slate-200/80 dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-300 dark:hover:bg-zinc-800"
                  }`}
                >
                  <span
                    className="size-3 rounded-full ring-2 ring-white/20"
                    style={{ backgroundColor: PRESETS[key].swatch }}
                  />
                  <span>{PRESETS[key].label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <PaymentDialog
        {...pay.dialogProps}
        initialPaymentMethod={initialMethod === "COD" ? "COD" : null}
        options={OPTIONS}
        amountLabel={AMOUNT_LABEL}
        summary={SUMMARY}
        branding={{
          title: "Moksedul's Store",
          subtitle: "Choose your preferred payment method",
          logoUrl: "https://edge.moksedul.com/images/1785759363876-edited-image.webp",
        }}
        advance={{ enabled: true, amountLabel: "Tk 500" }}
      />
    </BdPaymentProvider>
  );
}
