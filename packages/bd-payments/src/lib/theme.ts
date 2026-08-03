import type { PaymentTheme } from "../types";

/** Maps a PaymentTheme key to its `--bdp-*` CSS variable. */
const VAR_MAP: Record<keyof PaymentTheme, string> = {
  primary: "--bdp-primary",
  primaryForeground: "--bdp-primary-fg",
  background: "--bdp-bg",
  foreground: "--bdp-fg",
  muted: "--bdp-muted",
  mutedForeground: "--bdp-muted-fg",
  border: "--bdp-border",
  destructive: "--bdp-destructive",
  radius: "--bdp-radius",
};

/** Dark-mode variable values, used when a colour scheme is forced. */
export const DARK_VARS: Record<string, string> = {
  "--bdp-bg": "#18181b",
  "--bdp-fg": "#fafafa",
  "--bdp-muted": "#27272a",
  "--bdp-muted-fg": "#a1a1aa",
  "--bdp-border": "#3f3f46",
  "--bdp-primary": "#6366f1",
  "--bdp-primary-fg": "#ffffff",
  "--bdp-destructive": "#f87171",
};

function declarations(vars: Record<string, string>): string {
  return Object.entries(vars)
    .map(([k, v]) => `${k}: ${v};`)
    .join(" ");
}

/**
 * Build a scoped stylesheet that applies theme overrides (and, optionally, a
 * forced colour scheme) to `.bd-payments-scope`. Targeting the scope class —
 * rather than a wrapper element — means the overrides still reach the dialog
 * even though it renders through a portal on `document.body`.
 */
export function buildThemeCss(
  theme?: PaymentTheme,
  colorScheme?: "light" | "dark",
): string {
  const vars: Record<string, string> = {};

  if (colorScheme === "dark") Object.assign(vars, DARK_VARS);

  if (theme) {
    for (const [key, val] of Object.entries(theme)) {
      if (val) vars[VAR_MAP[key as keyof PaymentTheme]] = val;
    }
  }

  if (Object.keys(vars).length === 0) return "";
  const scheme = colorScheme ? ` color-scheme: ${colorScheme};` : "";
  return `.bd-payments-scope { ${declarations(vars)}${scheme} }`;
}
