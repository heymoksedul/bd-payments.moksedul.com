"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/cn";

interface CopyableValueProps {
  value: string;
  label: string;
  mono?: boolean;
}

/** Copy-to-clipboard row for a value users tend to mistype (e.g. account numbers). */
export function CopyableValue({ value, label, mono = true }: CopyableValueProps) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard blocked (insecure context / permissions).
    }
  }

  return (
    <div className="flex items-center justify-between gap-3 rounded-xl bg-white/10 px-3.5 py-2.5 backdrop-blur-sm">
      <div className="min-w-0">
        <p className="text-[10px] font-medium uppercase tracking-wider opacity-70">
          {label}
        </p>
        <p className={cn("truncate text-base font-bold tracking-wide", mono && "font-mono")}>
          {value}
        </p>
      </div>
      <button
        type="button"
        onClick={copy}
        className="flex shrink-0 cursor-pointer items-center gap-1.5 rounded-lg bg-white/20 px-2.5 py-1.5 text-xs font-semibold transition-colors hover:bg-white/30"
      >
        {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
