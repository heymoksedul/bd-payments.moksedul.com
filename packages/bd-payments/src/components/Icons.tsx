/**
 * Inline SVG brand marks for BD payment providers.
 *
 * Each icon is a 120x120 viewBox SVG encoded as a data-URI string so it can
 * be used directly as `logoUrl` in PaymentBrand definitions without any extra
 * network requests or bundler configuration.
 *
 * Design notes:
 * - All icons use rounded-rect (rx=28) backgrounds to match the tile shape.
 * - Colours are the official brand hex values.
 * - Marks are simplified geometric representations (not trademarked artwork).
 */

function svg(inner: string, bg: string): string {
  return `data:image/svg+xml;charset=utf-8,` + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" rx="28" fill="${bg}"/>${inner}</svg>`
  );
}

/** bKash — pink background, stylised "b" letterform */
export const BKASH_ICON = svg(
  `<text x="60" y="78" font-family="Arial Black,Arial,sans-serif" font-size="62" font-weight="900" fill="#FFFFFF" text-anchor="middle">b</text><text x="60" y="106" font-family="Arial,sans-serif" font-size="16" font-weight="700" fill="#FFFFFF" text-anchor="middle" letter-spacing="1">Kash</text>`,
  "#E2136E"
);

/** Nagad — deep orange/red background, stylised flame */
export const NAGAD_ICON = svg(
  `<path d="M60 22 C50 38 36 44 36 60 C36 75 46 84 60 88 C74 84 84 75 84 60 C84 44 70 38 60 22Z" fill="#FFD100"/><path d="M60 38 C54 48 48 52 48 62 C48 70 53 76 60 78 C67 76 72 70 72 62 C72 52 66 48 60 38Z" fill="#FFFFFF" opacity="0.9"/><text x="60" y="108" font-family="Arial,sans-serif" font-size="14" font-weight="700" fill="#FFFFFF" text-anchor="middle" letter-spacing="1">NAGAD</text>`,
  "#F15A24"
);

/** Rocket — purple background, rocket ship */
export const ROCKET_ICON = svg(
  `<path d="M60 18 C52 28 48 42 48 56 L48 70 L54 76 L54 68 C54 68 56 66 60 66 C64 66 66 68 66 68 L66 76 L72 70 L72 56 C72 42 68 28 60 18Z" fill="#FFFFFF"/><ellipse cx="60" cy="46" rx="7" ry="9" fill="#8C3494"/><path d="M44 62 C40 62 36 65 36 70 L48 68Z" fill="#FFFFFF" opacity="0.7"/><path d="M76 62 C80 62 84 65 84 70 L72 68Z" fill="#FFFFFF" opacity="0.7"/><text x="60" y="108" font-family="Arial,sans-serif" font-size="13" font-weight="700" fill="#FFFFFF" text-anchor="middle">Rocket</text>`,
  "#8C3494"
);

/** Bank Transfer — navy blue background, classic bank columns */
export const BANK_TRANSFER_ICON = svg(
  `<polygon points="60,18 90,34 30,34" fill="#FFFFFF"/><rect x="30" y="36" width="60" height="6" rx="2" fill="#FFFFFF"/><rect x="34" y="44" width="8" height="26" rx="2" fill="#FFFFFF"/><rect x="47" y="44" width="8" height="26" rx="2" fill="#FFFFFF"/><rect x="60" y="44" width="8" height="26" rx="2" fill="#FFFFFF"/><rect x="73" y="44" width="8" height="26" rx="2" fill="#FFFFFF"/><rect x="28" y="72" width="64" height="6" rx="2" fill="#FFFFFF"/><text x="60" y="105" font-family="Arial,sans-serif" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle" letter-spacing="1">BANK</text>`,
  "#1E3A8A"
);

/** Card — dark background, layered card representation with circles */
export const CARD_ICON = svg(
  `<rect x="18" y="32" width="84" height="56" rx="10" fill="#1E293B"/><rect x="18" y="44" width="84" height="14" fill="#334155"/><rect x="26" y="66" width="24" height="8" rx="3" fill="#475569"/><circle cx="74" cy="70" r="10" fill="#EB001B" opacity="0.9"/><circle cx="86" cy="70" r="10" fill="#F79E1B" opacity="0.75"/>`,
  "#4F46E5"
);

/** COD — green background, delivery box with checkmark */
export const COD_ICON = svg(
  `<rect x="24" y="42" width="50" height="38" rx="4" fill="#FFFFFF"/><path d="M74 42 L96 54 L96 80 L74 80Z" fill="#D1FAE5"/><path d="M74 42 L96 54 L74 54Z" fill="#FFFFFF" opacity="0.5"/><circle cx="38" cy="85" r="7" fill="#FFFFFF" stroke="#15803D" stroke-width="3"/><circle cx="70" cy="85" r="7" fill="#FFFFFF" stroke="#15803D" stroke-width="3"/><path d="M33 58 L40 66 L55 50" stroke="#15803D" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  "#15803D"
);

/** Upay — sky blue background, stylised "U" */
export const UPAY_ICON = svg(
  `<path d="M36 28 L36 68 C36 82 46 92 60 92 C74 92 84 82 84 68 L84 28 L70 28 L70 68 C70 74 65.5 78 60 78 C54.5 78 50 74 50 68 L50 28Z" fill="#FFFFFF"/><path d="M50 28 L70 28 L70 40 L50 40Z" fill="#FFB800"/><text x="60" y="113" font-family="Arial,sans-serif" font-size="13" font-weight="700" fill="#FFFFFF" text-anchor="middle">Upay</text>`,
  "#0284C7"
);

/** CellFin — emerald background, stylised phone with fin/signal */
export const CELLFIN_ICON = svg(
  `<rect x="42" y="22" width="36" height="62" rx="8" fill="#FFFFFF"/><rect x="48" y="30" width="24" height="36" rx="3" fill="#059669"/><circle cx="60" cy="76" r="4" fill="#059669"/><path d="M72 36 C78 30 86 30 92 36" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" fill="none"/><path d="M75 42 C79 38 85 38 89 42" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" fill="none"/><path d="M78 48 C80 46 84 46 86 48" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" fill="none"/>`,
  "#059669"
);
