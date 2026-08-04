"use client";

import { ClipboardPaste } from "lucide-react";
import { cn } from "../../lib/cn";
import { renderInstructions } from "../../lib/payment-instructions";
import {
  extractTrxId,
  sanitiseTrxId,
  type TrxIdConstraints,
} from "../../lib/payment-validation";
import {
  sanitiseSenderNumber,
  type SenderNumberConstraints,
} from "../../lib/sender-validation";
import type { PaymentBrand, PaymentMethod, PaymentOption } from "../../types";
import { CopyableValue } from "../CopyableValue";
import { FormField } from "../FormField";

/** Reads text from clipboard and returns it, or empty string on failure. */
async function readClipboard(): Promise<string> {
  try {
    return await navigator.clipboard.readText();
  } catch {
    return "";
  }
}

interface Props {
  selected: PaymentOption;
  brand: PaymentBrand;
  method: PaymentMethod;
  label: string;
  currentAmountLabel: string;
  needsTrxId: boolean;
  transactionId: string;
  setTransactionId: (v: string) => void;
  senderNumber: string;
  setSenderNumber: (v: string) => void;
  trxConstraints: TrxIdConstraints;
  trxValid: boolean;
  needsSenderNumber: boolean;
  senderConstraints: SenderNumberConstraints;
  error: string | null;
  clearError: () => void;
}

/** Step 2 — account details + transaction-ID entry for the chosen method. */
export function DetailsStep({
  selected,
  brand,
  method,
  label,
  currentAmountLabel,
  needsTrxId,
  transactionId,
  setTransactionId,
  senderNumber,
  setSenderNumber,
  trxConstraints,
  trxValid,
  needsSenderNumber,
  senderConstraints,
  error,
  clearError,
}: Props) {
  return (
    <div className="flex flex-col gap-4">
      {selected.accountNumber && (
        <div
          className="flex flex-col gap-2.5 rounded-2xl p-3.5 text-white"
          style={{
            background: `linear-gradient(135deg, ${brand.color}, ${brand.colorDark})`,
          }}
        >
          {selected.bankName && (
            <p className="text-sm font-semibold">{selected.bankName}</p>
          )}
          <CopyableValue
            label={
              method === "BANK_TRANSFER" ? "Account number" : `${label} number`
            }
            value={selected.accountNumber}
          />
          <div className="flex flex-wrap gap-x-5 gap-y-1 px-1 text-[11px] text-white/80">
            {selected.accountName && <span>Name: {selected.accountName}</span>}
            {selected.accountType && method !== "BANK_TRANSFER" && (
              <span>Type: {selected.accountType}</span>
            )}
            {selected.branchName && <span>Branch: {selected.branchName}</span>}
            {selected.routingNumber && (
              <span>Routing: {selected.routingNumber}</span>
            )}
          </div>
        </div>
      )}

      {selected.instructions && (
        <ol className="flex flex-col gap-2.5">
          {renderInstructions(selected.instructions, {
            amount: currentAmountLabel,
            number: selected.accountNumber ?? "our account",
          }).map((line, i) => (
            <li key={i} className="flex items-center gap-2.5 text-xs">
              <span
                className="flex size-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold leading-none text-white shadow-xs select-none"
                style={{ backgroundColor: brand.color }}
              >
                {i + 1}
              </span>
              <span className="text-(--bdp-fg) opacity-85 leading-snug min-w-0 flex-1">
                {line}
              </span>
            </li>
          ))}
        </ol>
      )}

      {(needsTrxId || needsSenderNumber) && (
        <div className="flex flex-col gap-3 border-t border-(--bdp-border) pt-4">
          {needsTrxId && (
            <div className="flex flex-col gap-1.5">
              <FormField
                label={
                  method === "BANK_TRANSFER"
                    ? "Transfer reference"
                    : "Transaction ID (TrxID)"
                }
                required
                inputMode="text"
                autoComplete="off"
                autoCapitalize="characters"
                spellCheck={false}
                maxLength={trxConstraints.maxLength}
                placeholder={
                  method === "BANK_TRANSFER" ? "SLIP-00123" : "9F7A2B1C3D"
                }
                className="font-mono tracking-wide"
                value={transactionId}
                onChange={(e) => {
                  setTransactionId(
                    sanitiseTrxId(e.target.value, trxConstraints),
                  );
                  clearError();
                }}
                onPaste={(e) => {
                  e.preventDefault();
                  setTransactionId(
                    extractTrxId(
                      e.clipboardData.getData("text"),
                      selected.transactionIdPattern,
                      trxConstraints,
                    ),
                  );
                  clearError();
                }}
                suffix={
                  <button
                    type="button"
                    title="Paste from clipboard"
                    className="flex size-6 cursor-pointer items-center justify-center rounded-md text-(--bdp-muted-fg) transition-colors hover:bg-(--bdp-muted) hover:text-(--bdp-fg) active:scale-95"
                    onClick={async () => {
                      const text = await readClipboard();
                      if (text) {
                        setTransactionId(
                          extractTrxId(
                            text,
                            selected.transactionIdPattern,
                            trxConstraints,
                          ),
                        );
                        clearError();
                      }
                    }}
                  >
                    <ClipboardPaste className="size-3.5" />
                  </button>
                }
              />
              {trxConstraints.hint && (
                <div className="flex items-center justify-between px-0.5">
                  <span className="text-[11px] text-(--bdp-muted-fg)">
                    {trxConstraints.hint}
                  </span>
                  <span
                    className={cn(
                      "font-mono text-[11px] tabular-nums",
                      trxValid ? "text-emerald-600" : "text-(--bdp-muted-fg)",
                    )}
                  >
                    {transactionId.length}/{trxConstraints.maxLength}
                  </span>
                </div>
              )}
            </div>
          )}

          <div className="flex flex-col gap-1.5">
            <FormField
              label={
                method === "BANK_TRANSFER"
                  ? `Your account number${needsSenderNumber ? "" : " (optional)"}`
                  : `Your wallet number${needsSenderNumber ? "" : " (optional)"}`
              }
              required={needsSenderNumber}
              inputMode="numeric"
              autoComplete="off"
              maxLength={senderConstraints.maxLength}
              placeholder={
                method === "BANK_TRANSFER" ? "1501203948570" : "01XXXXXXXXX"
              }
              className="font-mono"
              value={senderNumber}
              onChange={(e) => {
                setSenderNumber(
                  sanitiseSenderNumber(e.target.value, senderConstraints),
                );
                clearError();
              }}
              onPaste={(e) => {
                e.preventDefault();
                setSenderNumber(
                  sanitiseSenderNumber(
                    e.clipboardData.getData("text"),
                    senderConstraints,
                  ),
                );
                clearError();
              }}
              suffix={
                <button
                  type="button"
                  title="Paste from clipboard"
                  className="flex size-6 cursor-pointer items-center justify-center rounded-md text-(--bdp-muted-fg) transition-colors hover:bg-(--bdp-muted) hover:text-(--bdp-fg) active:scale-95"
                  onClick={async () => {
                    const text = await readClipboard();
                    if (text) {
                      setSenderNumber(
                        sanitiseSenderNumber(text, senderConstraints),
                      );
                      clearError();
                    }
                  }}
                >
                  <ClipboardPaste className="size-3.5" />
                </button>
              }
            />
            {senderConstraints.hint && (
              <span className="px-0.5 text-[11px] text-(--bdp-muted-fg)">
                {senderConstraints.hint}
              </span>
            )}
          </div>
        </div>
      )}

      {error && (
        <p className="text-xs font-medium text-(--bdp-destructive)">{error}</p>
      )}
    </div>
  );
}
