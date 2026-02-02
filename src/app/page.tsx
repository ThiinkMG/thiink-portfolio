import { Navbar } from "@/components/features/Navbar";
import { Hero } from "@/components/features/Hero";
import { TrustMarquee } from "@/components/home/TrustMarquee";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { Testimonials } from "@/components/home/Testimonials";
import { CTABand } from "@/components/home/CTABand";
import { Footer } from "@/components/features/Footer";
import { SectionDivider } from "@/components/ui/SectionDivider";

// ─────────────────────────────────────────────────────────────────────────────
// HOMEPAGE - "The Exhibition Hall"
// Portfolio-first design with work showcase prominently featured
// ─────────────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main id="main-content" className="bg-museum min-h-screen">
      <Navbar />

      {/* 1. Hero - Portfolio showcase with rotating featured projects */}
      <Hero />

      {/* 2. Featured Work - Portfolio gallery (moved up for portfolio focus) */}
      <FeaturedWork />

      {/* Divider - Gold Monogram */}
      <SectionDivider variant="atom" color="gold" size="md" />

      {/* 3. Trust Marquee - Social proof */}
      <TrustMarquee />

      {/* Divider - Gold Monogram */}
      <SectionDivider variant="atom" color="gold" size="md" />

      {/* 4. Our Approach - The Method (Services nav links here) */}
      <ProcessTimeline />

      {/* Divider - Gold Monogram */}
      <SectionDivider variant="atom" color="gold" size="md" />

      {/* 5. Testimonials - Client proof */}
      <Testimonials />

      {/* 6. CTA Band - Conversion */}
      <CTABand />

      {/* 7. Footer */}
      <Footer />
    </main>
  );
}
