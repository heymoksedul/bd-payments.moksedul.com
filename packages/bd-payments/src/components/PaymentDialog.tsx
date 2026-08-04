"use client";

import { ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
import { cn } from "../lib/cn";
import { PAYMENT_METHOD_LABELS } from "../lib/labels";
import { isValidTrxId, parseTrxIdConstraints } from "../lib/payment-validation";
import {
  defaultSenderNumberPattern,
  isValidSenderNumber,
  parseSenderNumberConstraints,
} from "../lib/sender-validation";
import type {
  AdvanceConfig,
  BrandingConfig,
  PaymentBrand,
  PaymentMethod,
  PaymentOption,
  PaymentResult,
  SummaryRow,
} from "../types";
import { Button } from "./Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./Dialog";
import { PaymentBrandMark, resolveBrands } from "./payment-brands";
import { CodChoiceStep } from "./steps/CodChoiceStep";
import { DetailsStep } from "./steps/DetailsStep";
import { MethodStep } from "./steps/MethodStep";
import { ReviewStep } from "./steps/ReviewStep";

export interface PaymentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** The payment options your store has enabled. */
  options: PaymentOption[];
  /** Order total, already formatted for display (e.g. "Tk 1,299"). */
  amountLabel: string;
  /** Short recap shown on the review step. */
  summary: SummaryRow[];
  /** Called when the buyer confirms. Set `placing` while your request runs. */
  onConfirm: (result: PaymentResult) => void | Promise<void>;
  /** True while the order is being placed — disables the dialog and shows a spinner. */
  placing?: boolean;
  /** Pre-select a rail. Pass "COD" to open straight into the COD flow. */
  initialPaymentMethod?: PaymentMethod | string | null;
  /** Header title / subtitle / logo / footer note. */
  branding?: BrandingConfig;
  /** Optional Cash-on-Delivery advance flow. Omit to disable it. */
  advance?: AdvanceConfig;
  /** Recolour or re-label individual rails. */
  brands?: Partial<Record<PaymentMethod, Partial<PaymentBrand>>>;
  /** Override the default method names. */
  labels?: Partial<Record<PaymentMethod, string>>;
}

type Step = "method" | "cod-choice" | "details" | "review" | "success";

export function PaymentDialog({
  open,
  onOpenChange,
  options,
  amountLabel,
  summary,
  onConfirm,
  placing = false,
  initialPaymentMethod,
  branding,
  advance,
  brands: brandOverrides,
  labels: labelOverrides,
}: PaymentDialogProps) {
  const brands = useMemo(() => resolveBrands(brandOverrides), [brandOverrides]);
  const labels = useMemo(
    () => ({ ...PAYMENT_METHOD_LABELS, ...labelOverrides }),
    [labelOverrides],
  );
  const advanceEnabled = !!advance?.enabled;

  const [step, setStep] = useState<Step>("method");
  const [method, setMethod] = useState<PaymentMethod | null>(null);
  const [isAdvanceMode, setIsAdvanceMode] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [senderNumber, setSenderNumber] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [confirmError, setConfirmError] = useState<string | null>(null);
  const [busy, setBusy] = useState<PaymentMethod | "step" | null>(null);
  const [successResult, setSuccessResult] = useState<PaymentResult | null>(
    null,
  );

  // Initialize step & method when the dialog opens.
  useEffect(() => {
    if (!open) return;
    if (initialPaymentMethod === "COD") {
      setMethod("COD");
      setStep(advanceEnabled ? "cod-choice" : "review");
    } else {
      setStep("method");
      setMethod(null);
    }
    setIsAdvanceMode(false);
    setTransactionId("");
    setSenderNumber("");
    setError(null);
    setConfirmError(null);
    setBusy(null);
    setSuccessResult(null);
  }, [open, initialPaymentMethod, advanceEnabled]);

  // Filter: online payment or advance mode shows ONLY online options.
  const filteredOptions = useMemo(() => {
    let list = [...options];
    if (initialPaymentMethod !== "COD" || isAdvanceMode) {
      list = list.filter((o) => o.method !== "COD");
    }
    return list;
  }, [options, initialPaymentMethod, isAdvanceMode]);

  const selected = useMemo(
    () =>
      (method === "COD" ? options : filteredOptions).find(
        (o) => o.method === method,
      ) ?? null,
    [filteredOptions, options, method],
  );
  const brand = method ? brands[method] : null;
  const labelFor = (opt: PaymentOption) => opt.label ?? labels[opt.method];
  const selectedLabel = selected
    ? labelFor(selected)
    : method
      ? labels[method]
      : "";
  const needsTrxId = !!selected?.requireTransactionId;
  const needsSenderNumber = !!selected?.requireSenderNumber;

  const trxConstraints = useMemo(
    () => parseTrxIdConstraints(selected?.transactionIdPattern),
    [selected?.transactionIdPattern],
  );
  const trxValid = useMemo(
    () =>
      !needsTrxId ||
      isValidTrxId(
        transactionId,
        selected?.transactionIdPattern,
        trxConstraints,
      ),
    [needsTrxId, transactionId, selected?.transactionIdPattern, trxConstraints],
  );

  const senderNumberPattern =
    selected?.senderNumberPattern ??
    (selected ? defaultSenderNumberPattern(selected.method) : undefined);
  const senderConstraints = useMemo(
    () => parseSenderNumberConstraints(senderNumberPattern),
    [senderNumberPattern],
  );
  const senderValid = useMemo(
    () =>
      !needsSenderNumber ||
      isValidSenderNumber(senderNumber, senderNumberPattern, senderConstraints),
    [needsSenderNumber, senderNumber, senderNumberPattern, senderConstraints],
  );

  async function chooseMethod(next: PaymentMethod) {
    if (busy) return;
    setBusy(next);
    setError(null);
    await new Promise((r) => setTimeout(r, 420));
    setMethod(next);
    setStep("details");
    setBusy(null);
  }

  async function goToReview() {
    if (!selected || busy) return;
    if (needsTrxId) {
      if (!transactionId) {
        setError(
          method === "BANK_TRANSFER"
            ? "Enter the reference number from your transfer receipt."
            : "Enter the Transaction ID from your confirmation SMS.",
        );
        return;
      }
      if (transactionId.length < trxConstraints.minLength) {
        setError(
          `That's too short — a ${selectedLabel} ID is ${
            trxConstraints.hint ?? "longer than this"
          }.`,
        );
        return;
      }
      if (!trxValid) {
        setError("That doesn't look right — copy it exactly from your SMS.");
        return;
      }
    }
    if (needsSenderNumber) {
      if (!senderNumber) {
        setError(
          method === "BANK_TRANSFER"
            ? "Enter the bank account number you sent the transfer from."
            : "Enter the number you sent the payment from.",
        );
        return;
      }
      if (!senderValid) {
        setError(
          `That doesn't look right — ${
            senderConstraints.hint ?? "check the digits and try again"
          }.`,
        );
        return;
      }
    }
    setError(null);
    setBusy("step");
    await new Promise((r) => setTimeout(r, 500));
    setStep("review");
    setBusy(null);
  }

  async function confirm() {
    if (!method) return;
    const result: PaymentResult = {
      method,
      transactionId: needsTrxId ? transactionId : undefined,
      senderNumber:
        needsTrxId || needsSenderNumber
          ? senderNumber.trim() || undefined
          : undefined,
      isAdvance: isAdvanceMode || undefined,
    };
    setConfirmError(null);
    try {
      await onConfirm(result);
      setSuccessResult(result);
      setStep("success");
    } catch {
      setConfirmError(
        "We couldn't place your order — please try again, or use a different payment method.",
      );
    }
  }

  const currentAmountLabel =
    isAdvanceMode && advance ? advance.amountLabel : amountLabel;
  const stepIndex =
    step === "method" || step === "cod-choice" ? 0 : step === "details" ? 1 : 2;
  const showStepRail = step !== "success";
  const secureNote =
    branding?.secureNote === undefined
      ? "Every payment is verified before your order ships"
      : branding.secureNote;
  const showFooter = step === "details" || step === "review";

  // Lucide icons used in the step rail
  const stepIcons = [
    // Method — credit card
    <svg
      key="method"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="size-4"
    >
      <rect
        x="2"
        y="5"
        width="16"
        height="11"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M2 9h16" stroke="currentColor" strokeWidth="1.6" />
    </svg>,
    // Details — document
    <svg
      key="details"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="size-4"
    >
      <path
        d="M6 2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M7 8h6M7 12h4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>,
    // Confirm — shield check
    <svg
      key="confirm"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="size-4"
    >
      <path
        d="M10 2l6 2.5v5c0 3.5-2.5 6-6 7.5C4.5 15.5 2 13 2 9.5v-5L10 2z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M7 10l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>,
  ];

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => !placing && !busy && onOpenChange(v)}
    >
      <DialogContent
        showCloseButton={!placing && !busy}
        onInteractOutside={(e) => e.preventDefault()}
      >
        {/* Header */}
        <div
          className={cn(
            "relative bg-(--bdp-bg) px-6 pb-4 text-(--bdp-fg) transition-colors",
            step === "method" || step === "cod-choice" ? "pt-10" : "pt-6",
          )}
        >
          {step === "method" || step === "cod-choice" ? (
            <div className="flex flex-col items-center gap-3 text-center">
              {branding?.logoUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={branding.logoUrl}
                  alt={branding?.title ?? "Logo"}
                  className="size-16 rounded-full object-cover shadow-sm ring-4 ring-(--bdp-primary)/20"
                />
              ) : (
                <div
                  className="flex size-16 items-center justify-center rounded-full font-bold text-2xl shadow-sm uppercase tracking-tight"
                  style={{
                    background: "rgba(99,102,241,0.12)",
                    color: "#6366f1",
                  }}
                >
                  {(branding?.title ?? "M").charAt(0) || "M"}
                </div>
              )}
              <div className="space-y-0.5">
                <DialogTitle className="text-[22px] font-bold tracking-tight text-(--bdp-fg)">
                  {branding?.title ?? "Moksedul's Store"}
                </DialogTitle>
                <DialogDescription className="text-sm text-(--bdp-muted-fg) leading-relaxed">
                  {step === "cod-choice"
                    ? "Cash on Delivery Options"
                    : isAdvanceMode && advance
                      ? `Pay ${advance.amountLabel} Advance via Online Payment`
                      : (branding?.subtitle ??
                        "Choose your preferred payment method")}
                </DialogDescription>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setError(null);
                  setConfirmError(null);
                  setStep(step === "review" ? "details" : "method");
                }}
                className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-(--bdp-muted) text-(--bdp-fg) transition-colors hover:opacity-80"
                aria-label="Back"
              >
                <ArrowLeft className="size-4" />
              </button>
              {brand && (
                <PaymentBrandMark
                  brand={brand}
                  logoUrl={selected?.logoUrl}
                  size="sm"
                  className="ring-1 ring-black/5"
                />
              )}
              <div className="min-w-0 flex-1">
                <DialogTitle className="truncate text-sm">
                  {selectedLabel}
                </DialogTitle>
                <DialogDescription className="text-xs text-(--bdp-muted-fg)">
                  {step === "details"
                    ? isAdvanceMode && advance
                      ? `Pay ${advance.amountLabel} Advance`
                      : "Payment details"
                    : "Review & confirm"}
                </DialogDescription>
              </div>
            </div>
          )}

          {/* Amount display */}
          <div className="mt-5 flex items-center justify-between rounded-xl border border-(--bdp-border) bg-(--bdp-bg) px-4 py-2.5">
            <span className="text-xs font-semibold uppercase tracking-widest text-(--bdp-muted-fg)">
              {isAdvanceMode ? "Advance Payable" : "Amount Payable"}
            </span>
            <span
              className="text-lg font-extrabold"
              style={{ color: "var(--bdp-primary)" }}
            >
              {currentAmountLabel}
            </span>
          </div>
        </div>

        {/* Step rail — icon circles connected by lines */}
        {showStepRail && (
          <div className="flex items-center px-6 py-3">
            {["Method", "Details", "Confirm"].map((label, i) => {
              const active = i <= stepIndex;
              const activeColor = brand?.color ?? "var(--bdp-primary)";
              return (
                <React.Fragment key={label}>
                  {/* Step node */}
                  <div className="flex flex-col items-center gap-1.5">
                    <span
                      className={cn(
                        "flex size-9 items-center justify-center rounded-full border-2 transition-colors",
                        active
                          ? "text-white"
                          : "text-(--bdp-muted-fg) border-(--bdp-border) bg-(--bdp-bg)",
                      )}
                      style={
                        active
                          ? {
                              backgroundColor: activeColor,
                              borderColor: activeColor,
                            }
                          : undefined
                      }
                    >
                      {stepIcons[i]}
                    </span>
                    <span
                      className={cn(
                        "text-[10px] font-semibold whitespace-nowrap",
                        active ? "text-(--bdp-fg)" : "text-(--bdp-muted-fg)",
                      )}
                    >
                      {label}
                    </span>
                  </div>
                  {/* Connector line between steps */}
                  {i < 2 && (
                    <span
                      className="mb-3.5 h-0.5 flex-1 rounded-full transition-colors"
                      style={{
                        backgroundColor:
                          i < stepIndex
                            ? (brand?.color ?? "var(--bdp-primary)")
                            : "var(--bdp-border)",
                      }}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        )}

        <div className="max-h-[55vh] overflow-y-auto bdp-scrollbar px-6 py-4">
          {step === "method" && (
            <MethodStep
              isAdvanceMode={isAdvanceMode}
              advanceHint={
                advance
                  ? `Select an online method below to pay your ${advance.amountLabel} Advance.`
                  : undefined
              }
              options={filteredOptions}
              brands={brands}
              labelFor={labelFor}
              busy={busy}
              secureNote={secureNote}
              onChoose={chooseMethod}
            />
          )}

          {step === "cod-choice" && advance && (
            <CodChoiceStep
              advanceAmountLabel={advance.amountLabel}
              description={advance.description}
              onPayAdvance={() => {
                setIsAdvanceMode(true);
                setStep("method");
              }}
              onPayLater={() => onConfirm({ method: "COD" })}
            />
          )}

          {step === "details" && selected && brand && method && (
            <DetailsStep
              selected={selected}
              brand={brand}
              method={method}
              label={selectedLabel}
              currentAmountLabel={currentAmountLabel}
              needsTrxId={needsTrxId}
              transactionId={transactionId}
              setTransactionId={setTransactionId}
              senderNumber={senderNumber}
              setSenderNumber={setSenderNumber}
              trxConstraints={trxConstraints}
              trxValid={trxValid}
              needsSenderNumber={needsSenderNumber}
              senderConstraints={senderConstraints}
              error={error}
              clearError={() => setError(null)}
            />
          )}

          {step === "review" && brand && (
            <ReviewStep
              selected={selected ?? { method: method! }}
              brand={brand}
              label={selectedLabel}
              transactionId={transactionId}
              senderNumber={senderNumber}
              summary={summary}
              needsTrxId={needsTrxId}
            />
          )}

          {step === "success" && successResult && (
            <div className="flex flex-col items-center py-6 text-center">
              {/* Checkmark circle */}
              <div
                className="mb-5 flex size-20 items-center justify-center rounded-full"
                style={{ backgroundColor: `${brand?.color ?? "#22c55e"}18` }}
              >
                <div
                  className="flex size-14 items-center justify-center rounded-full shadow-lg"
                  style={{
                    backgroundColor: brand?.color ?? "#22c55e",
                    boxShadow: `0 8px 24px ${brand?.color ?? "#22c55e"}40`,
                  }}
                >
                  <CheckCircle2
                    className="size-8 text-white"
                    strokeWidth={2.5}
                  />
                </div>
              </div>

              <p className="text-xl font-bold text-(--bdp-fg)">
                Order Confirmed!
              </p>
              <p className="mt-1.5 text-sm text-(--bdp-muted-fg)">
                {successResult.isAdvance
                  ? `Your ${currentAmountLabel} advance has been received.`
                  : "We've received your payment. Thank you!"}
              </p>

              {/* Summary card */}
              <div className="mt-5 w-full rounded-xl border border-(--bdp-border) text-left text-xs">
                <div className="flex items-center justify-between border-b border-(--bdp-border) px-4 py-3">
                  <span className="font-medium text-(--bdp-muted-fg)">
                    Payment via
                  </span>
                  <span className="font-bold text-(--bdp-fg)">
                    {selectedLabel}
                  </span>
                </div>
                {successResult.transactionId && (
                  <div className="flex items-center justify-between border-b border-(--bdp-border) px-4 py-3">
                    <span className="font-medium text-(--bdp-muted-fg)">
                      Transaction ID
                    </span>
                    <span className="font-mono font-bold text-(--bdp-fg)">
                      {successResult.transactionId}
                    </span>
                  </div>
                )}
                <div className="flex items-center justify-between px-4 py-3">
                  <span className="font-medium text-(--bdp-muted-fg)">
                    Amount Paid
                  </span>
                  <span
                    className="font-bold"
                    style={{ color: brand?.color ?? "var(--bdp-primary)" }}
                  >
                    {currentAmountLabel}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer action */}
        {showFooter && (
          <div className="border-t border-(--bdp-border) px-6 py-4">
            {step === "review" && confirmError && (
              <p className="mb-3 text-xs font-medium text-(--bdp-destructive)">
                {confirmError}
              </p>
            )}
            <Button
              style={
                brand
                  ? {
                      background: `linear-gradient(135deg, ${brand.color}, ${brand.colorDark})`,
                      color: brand.onColor,
                    }
                  : undefined
              }
              disabled={
                placing ||
                !!busy ||
                (step === "details" && (!trxValid || !senderValid))
              }
              onClick={step === "details" ? goToReview : confirm}
            >
              {placing ? (
                <>
                  <Loader2 className="size-4 animate-spin" /> Placing order…
                </>
              ) : busy === "step" ? (
                <>
                  <Loader2 className="size-4 animate-spin" /> Verifying details…
                </>
              ) : step === "details" ? (
                "Continue"
              ) : (
                `Confirm order · ${currentAmountLabel}`
              )}
            </Button>
          </div>
        )}
        {/* Success footer — close button */}
        {step === "success" && (
          <div className="border-t border-(--bdp-border) px-6 py-4">
            <Button
              style={
                brand
                  ? {
                      background: `linear-gradient(135deg, ${brand.color}, ${brand.colorDark})`,
                      color: brand.onColor,
                    }
                  : undefined
              }
              onClick={() => onOpenChange(false)}
            >
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
