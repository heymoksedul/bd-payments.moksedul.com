"use client";

import * as React from "react";
import { cn } from "../lib/cn";

export interface FormFieldProps
  extends Omit<React.ComponentProps<"input">, "children"> {
  label?: React.ReactNode;
  required?: boolean;
  /** Optional element rendered inside the input on the right side (e.g. a paste button). */
  suffix?: React.ReactNode;
}

/** A labelled text input used for the transaction-ID and sender-number fields. */
export const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, required, id, name, className, suffix, ...props }, ref) => {
    const reactId = React.useId();
    const fieldId = id ?? name ?? reactId;

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={fieldId}
            className="text-sm font-medium text-(--bdp-fg) select-none"
          >
            {label}
            {required && <span className="ml-0.5 text-(--bdp-destructive)">*</span>}
          </label>
        )}
        <div className="relative flex items-center">
          <input
            ref={ref}
            id={fieldId}
            name={name}
            required={required}
            className={cn(
              "h-11 w-full min-w-0 rounded-lg border border-(--bdp-border) bg-transparent text-base text-(--bdp-fg) outline-none transition-colors placeholder:text-(--bdp-muted-fg) focus-visible:border-(--bdp-primary) disabled:pointer-events-none disabled:opacity-50 md:text-sm",
              suffix ? "pl-3.5 pr-10" : "px-3.5",
              className,
            )}
            {...props}
          />
          {suffix && (
            <div className="absolute right-2 flex items-center">
              {suffix}
            </div>
          )}
        </div>
      </div>
    );
  },
);
FormField.displayName = "FormField";
