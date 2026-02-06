"use client";

import { H2, SectionLabel, Text } from "@/components/ui/Typography";
import { ArtifactCard, ArtifactGrid, FeaturedArtifact } from "@/components/ArtifactCard";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { CTALink } from "@/components/ui/TextLink";
import type { Project, FeaturedWorkConfig } from "@/lib/types";

// ─────────────────────────────────────────────────────────────────────────────
// FEATURED WORK SECTION - "The Gallery"
// Museum-style portfolio showcase with ArtifactCards
// CMS-editable via content/homepage/index.json
// ─────────────────────────────────────────────────────────────────────────────

interface FeaturedWorkProps {
    config?: FeaturedWorkConfig;
    projects: Project[];
}

// Default configuration when CMS data is not available
const DEFAULT_CONFIG: FeaturedWorkConfig = {
    sectionLabel: "Selected Work",
    sectionTitle: "The Gallery",
    sectionDescription: "Each project represents a journey of discovery, collaboration, and transformation. These are not just designs—they are artifacts of vision realized.",
    featuredProjectSlug: "kngdm",
    featuredDescription: "A comprehensive brand identity system for a visionary lifestyle brand. From logo design to full brand guidelines, we crafted an identity that commands attention and inspires devotion.",
    gridProjectSlugs: ["neo-sophia", "aiff", "later-youll-understand", "jack-hoagalino", "ai-automation", "my-college-finance"],
    ctaText: "Explore Full Portfolio",
    ctaLink: "/work",
};

export function FeaturedWork({ config, projects }: FeaturedWorkProps) {
    // Merge CMS config with defaults
    const displayConfig = {
        sectionLabel: config?.sectionLabel || DEFAULT_CONFIG.sectionLabel,
        sectionTitle: config?.sectionTitle || DEFAULT_CONFIG.sectionTitle,
        sectionDescription: config?.sectionDescription || DEFAULT_CONFIG.sectionDescription,
        featuredProjectSlug: config?.featuredProjectSlug || DEFAULT_CONFIG.featuredProjectSlug,
        featuredDescription: config?.featuredDescription || DEFAULT_CONFIG.featuredDescription,
        gridProjectSlugs: config?.gridProjectSlugs?.length ? config.gridProjectSlugs : DEFAULT_CONFIG.gridProjectSlugs,
        ctaText: config?.ctaText || DEFAULT_CONFIG.ctaText,
        ctaLink: config?.ctaLink || DEFAULT_CONFIG.ctaLink,
    };

    // Find featured project by slug
    const featuredProject = projects.find(
        (p) => p.slug === displayConfig.featuredProjectSlug
    );

    // Filter grid projects by slugs, maintaining order from config
    const gridProjects = displayConfig.gridProjectSlugs
        ?.map((slug) => projects.find((p) => p.slug === slug))
        .filter((p): p is Project => p !== undefined) || [];

    // Early return if no featured project found
    if (!featuredProject) {
        return null;
    }

    return (
        <section id="featured-work" className="py-24 md:py-32 bg-museum">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                {/* ─── SECTION HEADER ─── */}
                <ScrollReveal className="text-center mb-16 md:mb-20">
                    <SectionLabel className="mb-4 block">{displayConfig.sectionLabel}</SectionLabel>
                    <H2 className="mb-6">{displayConfig.sectionTitle}</H2>
                    <Text className="max-w-2xl mx-auto text-marble/70">
                        {displayConfig.sectionDescription}
                    </Text>
                </ScrollReveal>

                {/* ─── FEATURED PROJECT ─── */}
                <ScrollReveal className="mb-20">
                    <FeaturedArtifact
                        title={`${featuredProject.title}${featuredProject.subtitle ? ` ${featuredProject.subtitle}` : ''}`}
                        client={featuredProject.client}
                        year={featuredProject.year}
                        category={featuredProject.category}
                        description={displayConfig.featuredDescription || featuredProject.description}
                        image={featuredProject.heroImage}
                        href={`/work/${featuredProject.slug}`}
                        figureNumber={1}
                    />
                </ScrollReveal>

                {/* ─── DIVIDER ─── */}
                <SectionDivider variant="line" className="mb-16" />

                {/* ─── PROJECT GRID ─── */}
                <ArtifactGrid columns={3} gap="lg">
                    {gridProjects.map((project, index) => (
                        <ArtifactCard
                            key={project.slug}
                            title={project.title}
                            client={project.client}
                            year={project.year}
                            category={project.category}
                            image={project.thumbnailImage || project.heroImage}
                            href={`/work/${project.slug}`}
                            figureNumber={index + 2}
                            size="md"
                        />
                    ))}
                </ArtifactGrid>

                {/* ─── VIEW ALL CTA ─── */}
                <ScrollReveal className="text-center mt-16">
                    <CTALink href={displayConfig.ctaLink!} variant="gold" size="lg">
                        {displayConfig.ctaText}
                    </CTALink>
                </ScrollReveal>
            </div>
        </section>
    );
}

export default FeaturedWork;
