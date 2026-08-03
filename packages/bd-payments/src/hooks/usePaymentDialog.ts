"use client";

import { useCallback, useState } from "react";
import type { PaymentResult } from "../types";

export interface UsePaymentDialogOptions {
  /**
   * Runs when the buyer confirms. If it returns a promise, the dialog shows its
   * "Placing order…" state until the promise settles, then closes on success.
   */
  onConfirm?: (result: PaymentResult) => void | Promise<void>;
  /** Keep the dialog open after a successful confirm (default: close it). */
  keepOpenOnConfirm?: boolean;
}

/**
 * Wiring helper for <PaymentDialog>. Manages open + `placing` state and the
 * async confirm handshake, so opening checkout is a one-liner:
 *
 * ```tsx
 * const pay = usePaymentDialog({ onConfirm: (r) => api.placeOrder(r) });
 * // <button onClick={() => pay.open()}>Pay now</button>
 * // <PaymentDialog options={...} amountLabel={...} summary={...} {...pay.dialogProps} />
 * ```
 */
export function usePaymentDialog(options: UsePaymentDialogOptions = {}) {
  const { onConfirm, keepOpenOnConfirm } = options;
  const [isOpen, setIsOpen] = useState(false);
  const [placing, setPlacing] = useState(false);
  const [result, setResult] = useState<PaymentResult | null>(null);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const handleConfirm = useCallback(
    async (r: PaymentResult) => {
      setResult(r);
      const ret = onConfirm?.(r);
      if (ret && typeof (ret as Promise<void>).then === "function") {
        try {
          setPlacing(true);
          await ret;
          if (!keepOpenOnConfirm) setIsOpen(false);
        } finally {
          setPlacing(false);
        }
      } else if (!keepOpenOnConfirm) {
        setIsOpen(false);
      }
    },
    [onConfirm, keepOpenOnConfirm],
  );

  return {
    /** Whether the dialog is open. */
    isOpen,
    /** Open the dialog. */
    open,
    /** Close the dialog. */
    close,
    /** Directly control open state. */
    setOpen: setIsOpen,
    /** True while an async confirm is in flight. */
    placing,
    /** The most recent confirmed result. */
    result,
    /** Spread onto <PaymentDialog />. */
    dialogProps: {
      open: isOpen,
      onOpenChange: setIsOpen,
      placing,
      onConfirm: handleConfirm,
    },
  };
}
