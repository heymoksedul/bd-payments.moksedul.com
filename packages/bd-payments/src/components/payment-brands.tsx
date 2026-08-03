import { cn } from "../lib/cn";
import type { PaymentBrand, PaymentMethod } from "../types";
import {
  BANK_TRANSFER_ICON,
  BKASH_ICON,
  CARD_ICON,
  CELLFIN_ICON,
  COD_ICON,
  NAGAD_ICON,
  ROCKET_ICON,
  UPAY_ICON,
} from "./Icons";

/**
 * Brand identity for each payment method.
 *
 * We deliberately draw our own marks instead of bundling the providers' logo
 * files — those are trademarked assets with their own usage rules, and a
 * missing/renamed image would leave a broken checkout. Each method gets its
 * official brand colour and a clean wordmark tile, which reads as authentic
 * without shipping anyone's artwork.
 *
 * If you license the real logos, set `logoUrl` on the option (or override the
 * brand) and it replaces the tile automatically.
 */
export const PAYMENT_BRANDS: Record<PaymentMethod, PaymentBrand> = {
  BKASH: {
    color: "#E2136E",
    colorDark: "#B50E58",
    onColor: "#FFFFFF",
    wordmark: "bKash",
    tagline: "Send Money from your bKash app",
    logoUrl: BKASH_ICON,
  },
  NAGAD: {
    color: "#F15A24",
    colorDark: "#C4141B",
    onColor: "#FFFFFF",
    wordmark: "Nagad",
    tagline: "Send Money from your Nagad app",
    logoUrl: NAGAD_ICON,
  },
  ROCKET: {
    color: "#8C3494",
    colorDark: "#6E2874",
    onColor: "#FFFFFF",
    wordmark: "Rocket",
    tagline: "Send Money from your Rocket account",
    logoUrl: ROCKET_ICON,
  },
  BANK_TRANSFER: {
    color: "#1E3A8A",
    colorDark: "#172E6E",
    onColor: "#FFFFFF",
    wordmark: "Bank",
    tagline: "Transfer from any bank or app",
    logoUrl: BANK_TRANSFER_ICON,
  },
  CARD: {
    color: "#4F46E5",
    colorDark: "#4338CA",
    onColor: "#FFFFFF",
    wordmark: "Card",
    tagline: "Visa, Mastercard or AmEx",
    logoUrl: CARD_ICON,
  },
  COD: {
    color: "#15803D",
    colorDark: "#166534",
    onColor: "#FFFFFF",
    wordmark: "Cash",
    tagline: "Pay the courier when it arrives",
    logoUrl: COD_ICON,
  },
  UPAY: {
    color: "#0284C7",
    colorDark: "#0369A1",
    onColor: "#FFFFFF",
    wordmark: "Upay",
    tagline: "Send Money from your Upay app",
    logoUrl: UPAY_ICON,
  },
  CELLFIN: {
    color: "#059669",
    colorDark: "#047857",
    onColor: "#FFFFFF",
    wordmark: "CellFin",
    tagline: "Pay via CellFin app or Islami Bank",
    logoUrl: CELLFIN_ICON,
  },
};

/** Merge caller overrides on top of the defaults, per method. */
export function resolveBrands(
  overrides?: Partial<Record<PaymentMethod, Partial<PaymentBrand>>>,
): Record<PaymentMethod, PaymentBrand> {
  if (!overrides) return PAYMENT_BRANDS;
  const out = {} as Record<PaymentMethod, PaymentBrand>;
  (Object.keys(PAYMENT_BRANDS) as PaymentMethod[]).forEach((m) => {
    out[m] = { ...PAYMENT_BRANDS[m], ...overrides[m] };
  });
  return out;
}

/**
 * The square brand tile shown beside each method. Uses the given logo when one
 * exists, otherwise a gradient chip with the wordmark.
 */
export function PaymentBrandMark({
  brand,
  logoUrl,
  size = "md",
  className,
}: {
  brand: PaymentBrand;
  logoUrl?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const activeLogoUrl = logoUrl || brand.logoUrl;
  const dimensions = {
    sm: "size-9 text-[10px] rounded-lg",
    md: "size-11 text-[11px] rounded-xl",
    lg: "size-14 text-[13px] rounded-2xl",
  }[size];

  if (activeLogoUrl) {
    return (
      <span
        className={cn(
          "relative shrink-0 overflow-hidden border border-(--bdp-border)",
          dimensions,
          className,
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={activeLogoUrl}
          alt=""
          className="absolute inset-0 size-full object-contain"
        />
      </span>
    );
  }

  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center font-bold leading-none tracking-tight shadow-sm",
        dimensions,
        className,
      )}
      style={{
        background: `linear-gradient(140deg, ${brand.color}, ${brand.colorDark})`,
        color: brand.onColor,
      }}
      aria-hidden
    >
      {brand.wordmark}
    </span>
  );
}
