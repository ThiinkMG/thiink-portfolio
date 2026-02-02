import type { Metadata } from "next";
import { Cinzel, EB_Garamond, Cormorant_SC, Outfit } from "next/font/google";
import { StructuredData, organizationSchema } from "@/components/StructuredData";
import "./globals.css";

// Display & Headlines - Roman carved aesthetic
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

// Body text - Academic, highly legible Old Style serif
const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-garamond",
  display: "swap",
});

// Labels & metadata - Small caps for museum aesthetic
const cormorantSC = Cormorant_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant-sc",
  display: "swap",
});

// CTAs - Modern sans-serif contrast
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

// ─────────────────────────────────────────────────────────────────────────────
// SEO METADATA
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  // ─── BASIC ─────────────────────────────────────────────────
  title: {
    default: "Thiink Media Graphics | Luxury Design Agency",
    template: "%s | Thiink Media Graphics",
  },
  description:
    "Where ancient wisdom meets digital innovation. Premium branding, web design, and visual identity for visionary brands. Atlanta-based luxury design agency.",
  keywords: [
    "design agency",
    "branding",
    "logo design",
    "web design",
    "Atlanta design agency",
    "luxury branding",
    "visual identity",
    "brand strategy",
    "creative agency",
  ],
  authors: [{ name: "Thiink Media Graphics" }],
  creator: "Thiink Media Graphics",

  // ─── OPEN GRAPH ────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.thiinkmediagraphics.com",
    siteName: "Thiink Media Graphics",
    title: "Thiink Media Graphics | Luxury Design Agency",
    description:
      "Where ancient wisdom meets digital innovation. Premium branding, web design, and visual identity for visionary brands.",
    images: [
      {
        url: "/api/og?title=Thiink%20Media%20Graphics&subtitle=Where%20Ancient%20Wisdom%20Meets%20Digital%20Innovation",
        width: 1200,
        height: 630,
        alt: "Thiink Media Graphics - Luxury Design Agency",
      },
    ],
  },

  // ─── TWITTER ───────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Thiink Media Graphics | Luxury Design Agency",
    description: "Where ancient wisdom meets digital innovation. Premium branding and web design.",
    images: ["/api/og?title=Thiink%20Media%20Graphics&subtitle=Where%20Ancient%20Wisdom%20Meets%20Digital%20Innovation"],
  },

  // ─── ROBOTS ────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ─── ICONS ─────────────────────────────────────────────────
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  // ─── MANIFEST ──────────────────────────────────────────────
  manifest: "/site.webmanifest",

  // ─── OTHER ─────────────────────────────────────────────────
  metadataBase: new URL("https://www.thiinkmediagraphics.com"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${ebGaramond.variable} ${cormorantSC.variable} ${outfit.variable} antialiased bg-[var(--color-museum)] text-[var(--color-marble)] overflow-x-hidden`}
      >
        {/* Structured Data for SEO */}
        <StructuredData data={organizationSchema} />

        {/* Skip Link for keyboard navigation - WCAG 2.4.1 */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-gold focus:text-shark focus:font-outfit focus:text-sm focus:uppercase focus:tracking-wider"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
