"use client";

import * as React from "react";
import { cn } from "../lib/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

/**
 * The dialog's primary action button. Deliberately minimal — colour comes from
 * an inline gradient the caller sets from the active brand, so there are no
 * variants to configure.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex w-full shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg border-0 bg-(--bdp-primary) px-4 py-3 text-[14px] font-semibold text-(--bdp-primary-fg) shadow-sm outline-none transition-all hover:opacity-90 focus-visible:ring-2 focus-visible:ring-(--bdp-primary)/50 disabled:pointer-events-none disabled:opacity-50",
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
