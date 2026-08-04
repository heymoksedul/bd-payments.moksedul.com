"use client";

import { useCallback, useState } from "react";
import type { PaymentResult } from "../types";

export interface UsePaymentDialogOptions {
  /**
   * Runs when the buyer confirms. If it returns a promise, the dialog shows
   * its "Placing order…" state until the promise settles. On success,
   * `PaymentDialog` shows its own built-in "Order Confirmed" screen; if the
   * promise rejects, the dialog shows an error on the review step instead
   * and stays open so the buyer can retry.
   */
  onConfirm?: (result: PaymentResult) => void | Promise<void>;
  /**
   * Keep the dialog open after a successful confirm so `PaymentDialog` can
   * show its own built-in "Order Confirmed" screen. Default: `true` — the
   * buyer dismisses it via that screen's "Close" button. Set to `false` to
   * close the dialog immediately instead (e.g. if you redirect to your own
   * order-confirmation page on success).
   */
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
  const { onConfirm, keepOpenOnConfirm = true } = options;
  const [isOpen, setIsOpen] = useState(false);
  const [placing, setPlacing] = useState(false);
  const [result, setResult] = useState<PaymentResult | null>(null);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  // Only resolves once `onConfirm` has actually succeeded — if it throws,
  // this rethrows too, so `PaymentDialog` knows not to show its success
  // screen and can surface an error instead.
  const handleConfirm = useCallback(
    async (r: PaymentResult) => {
      const ret = onConfirm?.(r);
      if (ret && typeof (ret as Promise<void>).then === "function") {
        setPlacing(true);
        try {
          await ret;
        } finally {
          setPlacing(false);
        }
      }
      setResult(r);
      if (!keepOpenOnConfirm) setIsOpen(false);
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
