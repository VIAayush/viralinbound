import type { Metadata } from "next";
import { Hanken_Grotesk, Figtree, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/lib/app-context";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import DemoControlPanel from "@/components/DemoControlPanel";
import DemoBanner from "@/components/DemoBanner";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const heading = Hanken_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const SITE_URL = "https://demo.viralinbound.com";
const SITE_TITLE = "Viral Inbound — Strategy, Design, Technology, Products";
const SITE_DESCRIPTION =
  "Viral Inbound combines branding, UI/UX, website design and development, SEO and conversion optimization with purpose-built digital products — VILMS, SuperShowroom and Gifting Solutions.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s — Viral Inbound",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Viral Inbound",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable} ${mono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink antialiased">
        <AppProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
          >
            Skip to content
          </a>
          <ScrollProgress />
          <DemoBanner />
          <Nav />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppCTA />
          <DemoControlPanel />
        </AppProvider>
      </body>
    </html>
  );
}
