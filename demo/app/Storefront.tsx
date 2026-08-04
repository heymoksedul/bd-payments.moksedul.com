"use client";

import {
  BdPaymentProvider,
  PaymentDialog,
  usePaymentDialog,
  type PaymentTheme,
  type SummaryRow,
} from "@hellokit/bd-payments";
import {
  Battery,
  CreditCard,
  Minus,
  Plus,
  ShoppingBag,
  Sparkles,
  Truck,
  Watch,
} from "lucide-react";
import { useMemo, useState } from "react";
import { CallbackPanel } from "./CallbackPanel";
import { useTheme } from "./ThemeContext";
import { OPTIONS } from "./payment-options";

interface Product {
  id: string;
  name: string;
  blurb: string;
  price: number;
  icon: typeof CreditCard;
  gradient: string;
}

const PRODUCTS: Product[] = [
  {
    id: "nfc-card",
    name: "Premium NFC Smart Card",
    blurb: "Tap-to-share digital business profile",
    price: 1299,
    icon: CreditCard,
    gradient: "from-indigo-500 to-violet-600",
  },
  {
    id: "charge-pad",
    name: "15W Wireless Charging Pad",
    blurb: "Fast-charges any Qi-enabled phone",
    price: 899,
    icon: Battery,
    gradient: "from-amber-500 to-orange-600",
  },
  {
    id: "smart-watch",
    name: "FitTrack Smart Watch",
    blurb: "Heart rate, sleep & activity tracking",
    price: 2499,
    icon: Watch,
    gradient: "from-emerald-500 to-teal-600",
  },
];

const DELIVERY_FEE = 100;

function formatTk(n: number) {
  return `Tk ${n.toLocaleString("en-US")}`;
}

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

export function Storefront() {
  const { theme } = useTheme();
  const [preset, setPreset] = useState<PresetKey>("indigo");
  const [cart, setCart] = useState<Record<string, number>>({ "nfc-card": 1 });
  const [checkoutMethod, setCheckoutMethod] = useState<"ONLINE" | "COD">(
    "ONLINE",
  );
  const [placedAt, setPlacedAt] = useState<Date | null>(null);

  const pay = usePaymentDialog({
    onConfirm: async () => {
      // Simulate a network call to your own order-placement endpoint.
      await new Promise((r) => setTimeout(r, 1200));
      setPlacedAt(new Date());
    },
  });

  const cartItems = useMemo(
    () =>
      PRODUCTS.filter((p) => (cart[p.id] ?? 0) > 0).map((p) => ({
        ...p,
        qty: cart[p.id],
      })),
    [cart],
  );
  const subtotal = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);
  const total = subtotal > 0 ? subtotal + DELIVERY_FEE : 0;
  const amountLabel = formatTk(total);
  const advanceAmount = Math.max(100, Math.round((total * 0.2) / 50) * 50);

  const summary: SummaryRow[] = [
    ...cartItems.map((i) => ({
      label: `${i.name} × ${i.qty}`,
      value: formatTk(i.price * i.qty),
    })),
    { label: "Delivery", value: formatTk(DELIVERY_FEE) },
    { label: "Total", value: amountLabel },
  ];

  function addToCart(id: string) {
    setCart((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }));
  }
  function removeFromCart(id: string) {
    setCart((c) => {
      const qty = (c[id] ?? 0) - 1;
      const next = { ...c };
      if (qty <= 0) delete next[id];
      else next[id] = qty;
      return next;
    });
  }

  function checkout(method: "ONLINE" | "COD") {
    if (total === 0) return;
    setCheckoutMethod(method);
    pay.open();
  }

  const active = PRESETS[preset];
  const effectiveColorScheme =
    active.colorScheme || (theme === "dark" ? "dark" : "light");

  return (
    <BdPaymentProvider
      config={{ theme: active.theme, colorScheme: effectiveColorScheme }}
    >
      <div className="grid gap-5 lg:grid-cols-[1fr_320px]">
        {/* Product grid */}
        <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:shadow-2xl dark:shadow-indigo-950/20 sm:p-8">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="size-4 text-indigo-500" />
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                Demo Store
              </h2>
            </div>
            <span className="text-[11px] text-slate-400 dark:text-zinc-500">
              Add items, then check out below
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {PRODUCTS.map((p) => {
              const qty = cart[p.id] ?? 0;
              const Icon = p.icon;
              return (
                <div
                  key={p.id}
                  className="flex flex-col rounded-xl border border-slate-200 bg-slate-50/60 p-4 transition-colors dark:border-zinc-800 dark:bg-zinc-950/40"
                >
                  <div
                    className={`flex size-11 items-center justify-center rounded-xl bg-gradient-to-br ${p.gradient} text-white shadow-sm`}
                  >
                    <Icon className="size-5" />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-slate-900 dark:text-zinc-100">
                    {p.name}
                  </p>
                  <p className="mt-0.5 text-xs leading-snug text-slate-500 dark:text-zinc-400">
                    {p.blurb}
                  </p>
                  <div className="mt-3 flex items-center justify-between pt-3 border-t border-slate-200/70 dark:border-zinc-800/70">
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      {formatTk(p.price)}
                    </span>
                    {qty === 0 ? (
                      <button
                        onClick={() => addToCart(p.id)}
                        className="cursor-pointer rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-zinc-200"
                      >
                        Add
                      </button>
                    ) : (
                      <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white dark:border-zinc-700 dark:bg-zinc-900">
                        <button
                          onClick={() => removeFromCart(p.id)}
                          aria-label={`Remove one ${p.name}`}
                          className="flex size-7 cursor-pointer items-center justify-center text-slate-500 transition-colors hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white"
                        >
                          <Minus className="size-3.5" />
                        </button>
                        <span className="w-4 text-center text-xs font-bold tabular-nums text-slate-900 dark:text-white">
                          {qty}
                        </span>
                        <button
                          onClick={() => addToCart(p.id)}
                          aria-label={`Add one more ${p.name}`}
                          className="flex size-7 cursor-pointer items-center justify-center text-slate-500 transition-colors hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white"
                        >
                          <Plus className="size-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Preset Theme Switcher */}
          <div className="mt-6 border-t border-slate-200/80 pt-5 dark:border-zinc-800/80">
            <div className="mb-3 flex items-center justify-between">
              <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                <Sparkles className="size-3.5 text-indigo-500" />
                <span>Checkout Presets & Themes</span>
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

        {/* Cart / checkout sidebar */}
        <div className="flex h-fit flex-col rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-xl backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-900/60 lg:sticky lg:top-6">
          <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
            Your Cart
          </h3>

          {cartItems.length === 0 ? (
            <p className="py-6 text-center text-xs text-slate-400 dark:text-zinc-500">
              Add a product to see checkout in action.
            </p>
          ) : (
            <div className="flex flex-col gap-2.5">
              {cartItems.map((i) => (
                <div
                  key={i.id}
                  className="flex items-center justify-between gap-2 text-xs"
                >
                  <span className="min-w-0 truncate text-slate-600 dark:text-zinc-300">
                    {i.name} <span className="text-slate-400">× {i.qty}</span>
                  </span>
                  <span className="shrink-0 font-semibold text-slate-900 dark:text-white">
                    {formatTk(i.price * i.qty)}
                  </span>
                </div>
              ))}
              <div className="flex items-center justify-between border-t border-dashed border-slate-200 pt-2.5 text-xs text-slate-500 dark:border-zinc-800 dark:text-zinc-400">
                <span>Delivery</span>
                <span>{formatTk(DELIVERY_FEE)}</span>
              </div>
              <div className="flex items-center justify-between border-t border-slate-200 pt-2.5 text-sm font-bold text-slate-900 dark:border-zinc-800 dark:text-white">
                <span>Total</span>
                <span>{amountLabel}</span>
              </div>

              <div className="mt-3 flex flex-col gap-2">
                <button
                  onClick={() => checkout("ONLINE")}
                  className="flex items-center justify-center gap-2 cursor-pointer rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:bg-indigo-700 hover:shadow-indigo-500/35 active:scale-[0.99] dark:bg-indigo-600 dark:hover:bg-indigo-500"
                >
                  <CreditCard className="size-4" />
                  <span>Pay Online</span>
                </button>
                <button
                  onClick={() => checkout("COD")}
                  className="flex items-center justify-center gap-2 cursor-pointer rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-xs transition-all hover:bg-slate-50 dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-100 dark:hover:bg-zinc-800"
                >
                  <Truck className="size-4 text-slate-500 dark:text-zinc-400" />
                  <span>Cash on Delivery</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <PaymentDialog
        {...pay.dialogProps}
        initialPaymentMethod={checkoutMethod === "COD" ? "COD" : null}
        options={OPTIONS}
        amountLabel={amountLabel}
        summary={summary}
        branding={{
          title: "Moksedul's Store",
          subtitle: "Choose your preferred payment method",
          logoUrl:
            "https://edge.moksedul.com/images/1785759363876-edited-image.webp",
        }}
        advance={{ enabled: true, amountLabel: formatTk(advanceAmount) }}
      />

      {pay.result && placedAt && (
        <CallbackPanel result={pay.result} placedAt={placedAt} />
      )}
    </BdPaymentProvider>
  );
}
