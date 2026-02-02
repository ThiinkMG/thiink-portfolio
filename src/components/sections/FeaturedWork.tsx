"use client";

import { H2, SectionLabel, Text } from "@/components/ui/Typography";
import { ArtifactCard, ArtifactGrid, FeaturedArtifact } from "@/components/ArtifactCard";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { CTALink } from "@/components/ui/TextLink";

// ─────────────────────────────────────────────────────────────────────────────
// FEATURED WORK SECTION - "The Gallery"
// Museum-style portfolio showcase with ArtifactCards
// ─────────────────────────────────────────────────────────────────────────────

// Featured project for hero display
const FEATURED_PROJECT = {
    title: "KNGDM Brand Identity",
    client: "KNGDM",
    year: "2024",
    category: "Brand Identity",
    description: "A comprehensive brand identity system for a visionary lifestyle brand. From logo design to full brand guidelines, we crafted an identity that commands attention and inspires devotion.",
    image: "/_design_references/Design Assets/Clients/KNGDM/Final logo inspiration/Mockups/KNGDM - Brand Identity Mockup 1.png",
    href: "/work/kngdm",
};

// Portfolio grid projects
const PROJECTS = [
    {
        title: "Neo Sophia App",
        client: "Neo Sophia",
        year: "2024",
        category: "App Design",
        image: "/_design_references/Design Assets/Clients/Neo Sophia/Case Study/NS App Homescreen Mockup 1 Transparent.png",
        href: "/work/neo-sophia",
    },
    {
        title: "Atlanta Indian Film Festival",
        client: "AIFF",
        year: "2024",
        category: "Event Branding",
        image: "/_design_references/Design Assets/Clients/Atlanta Indian Film Festival/Case Study/AIFF Retractable 2 Banner Mockup 1.2 - w BG.png",
        href: "/work/aiff",
    },
    {
        title: "Later You'll Understand",
        client: "Dionta Goodson",
        year: "2023",
        category: "Album Art",
        image: "/_design_references/Design Assets/Clients/Dionta Goodson (Later You'll Understand)/Case Study/Later Youll Understand Album Cover Art Mockup 2 w BG.png",
        href: "/work/later-youll-understand",
    },
    {
        title: "Jack Hoagalino",
        client: "Jack Hoagalino",
        year: "2024",
        category: "Entertainment",
        image: "/_design_references/Design Assets/Clients/Jack Hoagalino/Case Study/Corrected - Jack Hoagalino TV Show Poster - Widescreen.png",
        href: "/work/jack-hoagalino",
    },
    {
        title: "Ai x Automation Podcast",
        client: "Alex Sofranos",
        year: "2024",
        category: "Podcast Branding",
        image: "/_design_references/Design Assets/Clients/Alex Sofranos (Ai x Automation Podcast)/Case Study/COA - Alex Sofronas - Ai x Automation Podcast Cover Art Mockup 1 - Batch 2.png",
        href: "/work/ai-automation",
    },
    {
        title: "My College Finance",
        client: "My College Finance",
        year: "2023",
        category: "Mascot Design",
        image: "/_design_references/Design Assets/Clients/My College Finance/Case Study/My College Finance - Mascot Holding Banner.png",
        href: "/work/my-college-finance",
    },
];

export function FeaturedWork() {
    return (
        <section id="featured-work" className="py-24 md:py-32 bg-museum">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                {/* ─── SECTION HEADER ─── */}
                <ScrollReveal className="text-center mb-16 md:mb-20">
                    <SectionLabel className="mb-4 block">Selected Work</SectionLabel>
                    <H2 className="mb-6">The Gallery</H2>
                    <Text className="max-w-2xl mx-auto text-marble/70">
                        Each project represents a journey of discovery, collaboration, and
                        transformation. These are not just designs—they are artifacts of vision realized.
                    </Text>
                </ScrollReveal>

                {/* ─── FEATURED PROJECT ─── */}
                <ScrollReveal className="mb-20">
                    <FeaturedArtifact
                        title={FEATURED_PROJECT.title}
                        client={FEATURED_PROJECT.client}
                        year={FEATURED_PROJECT.year}
                        category={FEATURED_PROJECT.category}
                        description={FEATURED_PROJECT.description}
                        image={FEATURED_PROJECT.image}
                        href={FEATURED_PROJECT.href}
                        figureNumber={1}
                    />
                </ScrollReveal>

                {/* ─── DIVIDER ─── */}
                <SectionDivider variant="line" className="mb-16" />

                {/* ─── PROJECT GRID ─── */}
                <ArtifactGrid columns={3} gap="lg">
                    {PROJECTS.map((project, index) => (
                        <ArtifactCard
                            key={project.title}
                            title={project.title}
                            client={project.client}
                            year={project.year}
                            category={project.category}
                            image={project.image}
                            href={project.href}
                            figureNumber={index + 2}
                            size="md"
                        />
                    ))}
                </ArtifactGrid>

                {/* ─── VIEW ALL CTA ─── */}
                <ScrollReveal className="text-center mt-16">
                    <CTALink href="/work" variant="gold" size="lg">
                        Explore Full Portfolio
                    </CTALink>
                </ScrollReveal>
            </div>
        </section>
    );
}

export default FeaturedWork;
