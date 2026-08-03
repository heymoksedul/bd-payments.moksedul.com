"use client";

import { Dialog as DialogPrimitive } from "radix-ui";
import { XIcon } from "lucide-react";
import * as React from "react";
import { cn } from "../lib/cn";

/** The class that namespaces every dialog style. Applied on portalled nodes. */
export const SCOPE_CLASS = "bd-payments-scope";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      className={cn(SCOPE_CLASS, "bdp-overlay", className)}
      {...props}
    />
  );
}

export function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean;
}) {
  return (
    <DialogPrimitive.Portal>
      <DialogOverlay />
      <DialogPrimitive.Content
        className={cn(SCOPE_CLASS, "bdp-content", className)}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            aria-label="Close"
            className="absolute right-4 top-4 z-10 flex size-8 items-center justify-center rounded-full text-(--bdp-muted-fg) transition-colors hover:bg-(--bdp-muted) hover:text-(--bdp-fg) focus:outline-none"
          >
            <XIcon className="size-4" />
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

export function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      className={cn("text-base font-semibold leading-none", className)}
      {...props}
    />
  );
}

export function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      className={cn("text-xs text-(--bdp-muted-fg)", className)}
      {...props}
    />
  );
}
