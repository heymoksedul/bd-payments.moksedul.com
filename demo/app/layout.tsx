import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "@hellokit/bd-payments — Payment Dialog for Bangladeshi Checkouts",
  description:
    "A clean, professional, fully customizable multi-step payment dialog for bKash, Nagad, Rocket, Bank Transfer, Card and Cash on Delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${jetbrainsMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 transition-colors duration-200 dark:bg-[#0b0f17] dark:text-zinc-100 font-sans">
        {children}
      </body>
    </html>
  );
}
