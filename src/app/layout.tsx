import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import MobileStickyCTA from "@/components/layout/MobileStickyCTA";
import { Analytics } from "@vercel/analytics/react";
import { createClient } from "@/lib/supabase/server";
import "./globals.css";

// ─────────────────────────────────────────
// Font Definitions
// ─────────────────────────────────────────
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

// ─────────────────────────────────────────
// SEO Metadata
// ─────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: "MIITJEE — Jharkhand's #1 JEE & NEET Coaching Institute",
    template: "%s | MIITJEE",
  },
  description:
    "MIITJEE is Jharkhand's leading coaching institute for JEE Main, JEE Advanced, NEET, and Foundation programmes (Class 6–12). Expert IITian faculty, proven results, and personalised mentoring. Centres in Jamshedpur and Ranchi.",
  keywords: [
    "MIITJEE",
    "JEE coaching Jamshedpur",
    "NEET coaching Jharkhand",
    "IIT JEE preparation",
    "NEET preparation Ranchi",
    "foundation coaching",
    "best coaching institute Jharkhand",
  ],
  openGraph: {
    title: "MIITJEE — Jharkhand's #1 JEE & NEET Coaching Institute",
    description:
      "Expert IITian faculty, proven results, personalised mentoring. Join 10,000+ students who cracked JEE & NEET with MIITJEE.",
    type: "website",
    locale: "en_IN",
    siteName: "MIITJEE",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ─────────────────────────────────────────
// Root Layout
// ─────────────────────────────────────────
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();
  const { data: announcementData } = await supabase
    .from("site_settings")
    .select("value")
    .eq("key", "announcement_bar")
    .single();

  const announcementText = announcementData?.value;

  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        {announcementText && <AnnouncementBar text={announcementText} />}
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyCTA />
        <WhatsAppFAB />
        <Analytics />
      </body>
    </html>
  );
}
