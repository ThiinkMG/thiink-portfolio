import { Navbar } from "@/components/features/Navbar";
import { Hero } from "@/components/features/Hero";
import { TrustMarquee } from "@/components/home/TrustMarquee";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { Testimonials } from "@/components/home/Testimonials";
import { CTABand } from "@/components/home/CTABand";
import { Footer } from "@/components/features/Footer";
import { SectionDivider } from "@/components/ui/SectionDivider";
import {
  getProjects,
  getHomepageContent,
  getProcessContent,
  getServicesContent,
  getTestimonials,
  getSiteSettings,
} from "@/lib/cms";

// ─────────────────────────────────────────────────────────────────────────────
// HOMEPAGE - "The Exhibition Hall"
// Portfolio-first design with work showcase prominently featured
// ─────────────────────────────────────────────────────────────────────────────

export default function Home() {
  const projects = getProjects();
  const homepageContent = getHomepageContent();
  const processContent = getProcessContent();
  const servicesContent = getServicesContent();
  const testimonials = getTestimonials();
  const siteSettings = getSiteSettings();

  return (
    <main id="main-content" className="bg-museum min-h-screen">
      <Navbar
        logo={siteSettings?.navbar?.logo}
        ctaText={siteSettings?.navbar?.ctaText}
        ctaLink={siteSettings?.navbar?.ctaLink}
        links={siteSettings?.navbar?.links}
      />

      {/* 1. Hero - Portfolio showcase with rotating featured projects */}
      <Hero projects={projects} stats={homepageContent?.stats} hero={homepageContent?.hero} />

      {/* 2. Featured Work - Portfolio gallery (moved up for portfolio focus) */}
      <FeaturedWork />

      {/* Divider - Gold Monogram */}
      <SectionDivider variant="atom" color="gold" size="md" />

      {/* 3. Trust Marquee - Social proof */}
      <TrustMarquee
        title={homepageContent?.trustMarquee?.title}
        displayMode={homepageContent?.trustMarquee?.displayMode}
        logos={homepageContent?.trustMarquee?.logos}
        legacyLogos={homepageContent?.trustLogos}
      />

      {/* Divider - Gold Monogram */}
      <SectionDivider variant="atom" color="gold" size="md" />

      {/* 4. Our Approach - The Method (Services nav links here) */}
      <ProcessTimeline
        sectionLabel={processContent?.sectionLabel}
        sectionTitle={processContent?.sectionTitle}
        steps={processContent?.steps}
        serviceCards={servicesContent?.serviceCards}
      />

      {/* Divider - Gold Monogram */}
      <SectionDivider variant="atom" color="gold" size="md" />

      {/* 5. Testimonials - Client proof */}
      <Testimonials testimonials={testimonials} />

      {/* 6. CTA Band - Conversion */}
      <CTABand
        headline={homepageContent?.ctaBand?.headline}
        subtext={homepageContent?.ctaBand?.subtext}
        buttonText={homepageContent?.ctaBand?.buttonText}
        trustLine={homepageContent?.ctaBand?.trustLine}
        backgroundImage={homepageContent?.ctaBand?.backgroundImage}
        backgroundOpacity={homepageContent?.ctaBand?.backgroundOpacity ? homepageContent.ctaBand.backgroundOpacity / 100 : undefined}
      />

      {/* 7. Footer */}
      <Footer
        logo={siteSettings?.navbar?.logo}
        tagline={siteSettings?.footer?.tagline}
        copyright={siteSettings?.footer?.copyright}
        serviceLinks={siteSettings?.footer?.serviceLinks}
        exploreLinks={siteSettings?.footer?.exploreLinks}
        contact={siteSettings?.contact}
        social={siteSettings?.social}
      />
    </main>
  );
}
