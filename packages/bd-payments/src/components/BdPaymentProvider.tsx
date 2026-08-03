"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import { buildThemeCss } from "../lib/theme";
import { cssString } from "../styles";
import type { BdPaymentConfig } from "../types";

const BdPaymentContext = createContext<BdPaymentConfig>({});

export function useBdPaymentConfig() {
  return useContext(BdPaymentContext);
}

/**
 * Optional provider. Wrapping your app (or just your checkout) means you never
 * have to import the CSS file yourself — the scoped stylesheet is injected for
 * you, and any `theme` you pass is applied on top.
 *
 * ```tsx
 * <BdPaymentProvider config={{ theme: { primary: "#E2136E" } }}>
 *   <Checkout />
 * </BdPaymentProvider>
 * ```
 */
export function BdPaymentProvider({
  children,
  config,
}: {
  children: ReactNode;
  config?: BdPaymentConfig;
}) {
  const themeCss = useMemo(
    () => buildThemeCss(config?.theme, config?.colorScheme),
    [config?.theme, config?.colorScheme],
  );

  return (
    <BdPaymentContext.Provider value={config ?? {}}>
      {cssString && <style dangerouslySetInnerHTML={{ __html: cssString }} />}
      {themeCss && <style dangerouslySetInnerHTML={{ __html: themeCss }} />}
      {children}
    </BdPaymentContext.Provider>
  );
}
