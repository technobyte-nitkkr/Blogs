import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SiteHeader } from "@/components/site-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://technobyte.vercel.app",
  ),
  title: {
    default: "Technobyte Blogs",
    template: "%s | Technobyte Blogs",
  },
  description:
    "Technobyte blog platform for systems, development, AI/ML, events, and projects.",
  openGraph: {
    type: "website",
    title: "Technobyte Blogs",
    description:
      "Read technical writeups from Technobyte, NIT Kurukshetra.",
    siteName: "Technobyte Blogs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technobyte Blogs",
    description:
      "Read technical writeups from Technobyte, NIT Kurukshetra.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[color:var(--background)] text-[color:var(--foreground)]">
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,119,6,0.14),transparent_35%),radial-gradient(circle_at_top_right,rgba(15,118,110,0.1),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.72),rgba(255,255,255,0.98))]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.045)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />

          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <footer className="border-t border-zinc-900/10 bg-[color:var(--surface-elevated)]/75">
              <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-5 py-6 text-sm text-zinc-600 lg:flex-row lg:items-center lg:justify-between lg:px-8">
                <p>Technobyte Blogs, built for static delivery and ISR freshness.</p>
                <p className="font-medium text-zinc-900">Content served from Techno-Blog-Garden.</p>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
