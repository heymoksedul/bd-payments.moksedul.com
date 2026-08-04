"use client";

import {
  Check,
  Copy,
  ExternalLink,
  Github,
  Layers,
  Moon,
  Palette,
  ShieldCheck,
  Sun,
  Wallet,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { Docs } from "./Docs";
import { Storefront } from "./Storefront";
import { ThemeProvider, useTheme } from "./ThemeContext";

const FEATURES = [
  {
    icon: Layers,
    title: "Guided 3-Step Flow",
    body: "Method Selection → Details & TRX ID → Order Review & Confirmation, with optional COD advance support.",
  },
  {
    icon: Palette,
    title: "Fully Themeable",
    body: "Every color is mapped to clean CSS variables (--bdp-*). Light/dark modes built in, customizable via theme prop.",
  },
  {
    icon: ShieldCheck,
    title: "Scoped CSS Namespacing",
    body: "All stylesheet classes are scoped under .bd-payments-scope — guaranteed zero collision with your host styles.",
  },
  {
    icon: Zap,
    title: "Smart TRX ID Parser",
    body: "Automatically derives pattern length & character rules, and extracts Transaction IDs from pasted SMS strings.",
  },
  {
    icon: Wallet,
    title: "Validated Sender Numbers",
    body: "Require and validate the buyer's own wallet or bank account — BD mobile format built in, bank formats configurable.",
  },
  {
    icon: Check,
    title: "Real Success & Error States",
    body: "Shows its own confirmed / failed screens based on what onConfirm actually does — never a false positive.",
  },
];

function Nav() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="mb-12 flex items-center justify-between border-b border-slate-200 pb-5 dark:border-zinc-800">
      <div className="flex items-center gap-3">
        <div className="flex size-9 items-center justify-center rounded-xl bg-slate-900 font-mono text-sm font-bold text-white dark:bg-white dark:text-slate-900">
          BD
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm font-bold tracking-tight text-slate-900 dark:text-zinc-50">
            @hellokit/bd-payments
          </span>
          <span className="rounded-full bg-slate-100 px-2 py-0.5 font-mono text-[11px] font-semibold text-slate-600 dark:bg-zinc-800 dark:text-zinc-300">
            v1.0.0
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <a
          href="https://www.npmjs.com/package/@hellokit/bd-payments"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-xs transition-colors hover:bg-slate-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
        >
          <span>npm</span>
          <ExternalLink className="size-3" />
        </a>

        <a
          href="https://github.com/hellomoksedul"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-xs transition-colors hover:bg-slate-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
        >
          <Github className="size-3.5" />
          <span className="hidden sm:inline">GitHub</span>
        </a>

        <button
          onClick={toggleTheme}
          className="flex size-9 cursor-pointer items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-xs transition-colors hover:bg-slate-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          aria-label="Toggle Dark Mode"
        >
          {theme === "dark" ? (
            <Sun className="size-4 text-amber-400" />
          ) : (
            <Moon className="size-4 text-slate-700" />
          )}
        </button>
      </div>
    </nav>
  );
}

function Hero() {
  const [copiedInstall, setCopiedInstall] = useState(false);
  const copyInstall = () => {
    navigator.clipboard.writeText("npm install @hellokit/bd-payments");
    setCopiedInstall(true);
    setTimeout(() => setCopiedInstall(false), 2000);
  };

  return (
    <header className="mb-16 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100/80 px-3.5 py-1 text-xs font-medium text-slate-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
          <span className="size-1.5 rounded-full bg-emerald-500" />
          <span>Personal Payment Component · v1.0.0</span>
        </div>

        <h1 className="max-w-xl text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white leading-[1.12]">
          A checkout dialog for Bangladeshi payments, dropped into any React app.
        </h1>
        <p className="mt-5 max-w-lg text-base text-slate-600 sm:text-lg dark:text-zinc-400">
          bKash, Nagad, Rocket, Upay, CellFin, Bank Transfer, Card and Cash on
          Delivery — one component, fully themeable, with buyer-side
          validation for Transaction IDs and sender numbers built in.
        </p>

        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <div className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-5 py-3 font-mono text-xs sm:text-sm text-slate-900 shadow-xs dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100">
            <div className="flex items-center gap-2">
              <span className="select-none font-bold text-slate-400 dark:text-zinc-500">
                $
              </span>
              <span>npm install @hellokit/bd-payments</span>
            </div>
            <button
              onClick={copyInstall}
              className="flex size-7 cursor-pointer items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
              title="Copy install command"
            >
              {copiedInstall ? (
                <Check className="size-3.5 text-emerald-600 dark:text-emerald-400" />
              ) : (
                <Copy className="size-3.5" />
              )}
            </button>
          </div>
        </div>
        {copiedInstall && (
          <span className="mt-2 block text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            Copied to clipboard!
          </span>
        )}
      </div>

      {/* Mini feature stack — replaces a generic hero illustration */}
      <div className="grid gap-3">
        {[
          { label: "8 payment rails", body: "bKash, Nagad, Rocket, Upay, CellFin, Bank, Card, COD" },
          { label: "Validated end-to-end", body: "TrxID + sender number, both regex-driven and live-filtered" },
          { label: "No gateway lock-in", body: "You own onConfirm — this component never talks to a server" },
        ].map((row) => (
          <div
            key={row.label}
            className="rounded-xl border border-slate-200 bg-white/70 px-4 py-3 shadow-xs backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/50"
          >
            <p className="text-sm font-bold text-slate-900 dark:text-white">
              {row.label}
            </p>
            <p className="mt-0.5 text-xs text-slate-500 dark:text-zinc-400">
              {row.body}
            </p>
          </div>
        ))}
      </div>
    </header>
  );
}

function Content() {
  return (
    <div className="relative min-h-screen">
      <main className="mx-auto w-full max-w-[1280px] px-6 py-8 sm:py-12 lg:px-8">
        <Nav />
        <Hero />

        {/* Live Demo Section */}
        <section className="mb-20">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-500" />
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                Interactive Live Demo
              </h2>
            </div>
            <span className="text-xs text-slate-400 dark:text-zinc-500">
              Add products to your cart, then check out
            </span>
          </div>

          <Storefront />
        </section>

        {/* Supported Payment Channels */}
        <section className="mb-20 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-[#111622]">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-400 text-center sm:text-left">
            Supported Payment Channels & Gateways
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
            <span className="inline-flex items-center gap-2 rounded-lg border border-pink-200 bg-pink-50 px-3.5 py-1.5 text-xs font-semibold text-pink-700 dark:border-pink-900/40 dark:bg-pink-950/40 dark:text-pink-300">
              bKash (bkash pink)
            </span>
            <span className="inline-flex items-center gap-2 rounded-lg border border-orange-200 bg-orange-50 px-3.5 py-1.5 text-xs font-semibold text-orange-700 dark:border-orange-900/40 dark:bg-orange-950/40 dark:text-orange-300">
              Nagad (orange)
            </span>
            <span className="inline-flex items-center gap-2 rounded-lg border border-purple-200 bg-purple-50 px-3.5 py-1.5 text-xs font-semibold text-purple-700 dark:border-purple-900/40 dark:bg-purple-950/40 dark:text-purple-300">
              Rocket (purple)
            </span>
            <span className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-700 dark:border-blue-900/40 dark:bg-blue-950/40 dark:text-blue-300">
              Bank Transfer
            </span>
            <span className="inline-flex items-center gap-2 rounded-lg border border-indigo-200 bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold text-indigo-700 dark:border-indigo-900/40 dark:bg-indigo-950/40 dark:text-indigo-300">
              Cards (Visa / Mastercard)
            </span>
            <span className="inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-950/40 dark:text-emerald-300">
              Cash on Delivery (COD)
            </span>
          </div>
        </section>

        {/* Developer Features Grid */}
        <section className="mb-20">
          <h2 className="mb-6 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-400">
            Developer Features
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-[#111622]"
                >
                  <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-slate-100 text-slate-800 dark:bg-zinc-800 dark:text-zinc-200">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
                    {f.body}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <Docs />

        {/* Footer */}
        <footer className="flex flex-col items-center justify-center text-center border-t border-slate-200 pt-8 text-xs text-slate-500 dark:border-zinc-800 dark:text-zinc-400">
          <p>
            Created with by{" "}
            <a
              href="https://github.com/hellomoksedul"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900 dark:text-zinc-100 dark:decoration-zinc-700 dark:hover:decoration-white"
            >
              Moksedul Islam (@hellomoksedul)
            </a>{" "}
            · MIT Licensed
          </p>
        </footer>
      </main>
    </div>
  );
}

export function MainPageClient() {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
}
