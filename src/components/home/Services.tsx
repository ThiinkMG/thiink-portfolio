"use client";

import { H2, SectionLabel, Text } from "@/components/ui/Typography";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { ZigzagSection, ZigzagItem, BentoGrid, ServiceCard } from "@/components/layouts/ZigzagSection";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Globe, Palette, Layers, Printer, Sparkles, Code } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// SERVICES SECTION - "The Craft"
// Museum-style presentation of service offerings
// ─────────────────────────────────────────────────────────────────────────────

// Icon mapping for CMS string → React component
const ICON_MAP: Record<string, LucideIcon> = {
    Palette,
    Layers,
    Globe,
    Code,
    Printer,
    Sparkles,
};

interface ServiceData {
    label: string;
    title: string;
    description: string;
    image: string;
    ctaText: string;
    ctaHref: string;
    icon?: string;
}

interface ServiceCardData {
    title: string;
    description: string;
    expandedDescription?: string;
    icon: string;
}

interface ServicesProps {
    sectionLabel?: string;
    sectionTitle?: string;
    sectionDescription?: string;
    services?: ServiceData[];
    serviceCards?: ServiceCardData[];
}

// Default content for fallback
const DEFAULT_SERVICES: ServiceData[] = [
    {
        label: "Brand Identity",
        title: "The Foundation",
        description: "We forge brand identities that command attention and inspire loyalty. From strategic positioning to visual systems, we create the philosophical foundation your brand needs to thrive.",
        image: "/images/brand/reliefs/apollo-triumph.png",
        ctaText: "Explore Branding",
        ctaHref: "/services/branding",
    },
    {
        label: "Web Design",
        title: "Digital Temples",
        description: "Your website should be more than a digital brochure—it should be a monument to your vision. We craft immersive web experiences that convert visitors into devoted followers.",
        image: "/images/brand/reliefs/oracle-pythia.png",
        ctaText: "View Web Work",
        ctaHref: "/services/web",
    },
    {
        label: "Visual Design",
        title: "Artisan Graphics",
        description: "From print collateral to digital assets, we create visual materials that elevate every touchpoint. Each piece is crafted with the precision of a Renaissance master.",
        image: "/images/brand/reliefs/platos-allegory.png",
        ctaText: "See Graphics",
        ctaHref: "/services/graphics",
    },
];

const DEFAULT_SERVICE_CARDS: ServiceCardData[] = [
    { title: "Logo Design", description: "Iconic marks that capture your brand's essence in a single symbol.", icon: "Palette" },
    { title: "Brand Systems", description: "Comprehensive guidelines ensuring consistency across all touchpoints.", icon: "Layers" },
    { title: "Web Development", description: "High-performance sites built with modern frameworks and best practices.", icon: "Globe" },
    { title: "UI/UX Design", description: "Intuitive interfaces that delight users and drive conversions.", icon: "Code" },
    { title: "Print Design", description: "Business cards, packaging, and collateral that make lasting impressions.", icon: "Printer" },
    { title: "Creative Direction", description: "Strategic vision that guides every aspect of your visual identity.", icon: "Sparkles" },
];

export function Services({
    sectionLabel = "Our Expertise",
    sectionTitle = "The Craft",
    sectionDescription = "We blend classical design principles with cutting-edge technology to create brands that transcend trends and stand the test of time.",
    services = DEFAULT_SERVICES,
    serviceCards = DEFAULT_SERVICE_CARDS,
}: ServicesProps) {
    return (
        <section id="services" className="py-24 md:py-32 bg-obsidian">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                {/* ─── SECTION HEADER ─── */}
                <ScrollReveal className="text-center mb-16 md:mb-24">
                    <SectionLabel className="mb-4 block">{sectionLabel}</SectionLabel>
                    <H2 className="mb-6">{sectionTitle}</H2>
                    <Text className="max-w-2xl mx-auto text-marble/70">
                        {sectionDescription}
                    </Text>
                </ScrollReveal>

                {/* ─── ZIGZAG SERVICES ─── */}
                <ZigzagSection gap="xl" className="mb-24">
                    {services.map((service, index) => (
                        <ZigzagItem
                            key={service.title}
                            label={service.label}
                            title={service.title}
                            description={service.description}
                            image={service.image}
                            imageAlt={`${service.title} illustration`}
                            cta={{ text: service.ctaText, href: service.ctaHref }}
                            imageRight={index % 2 === 0}
                        />
                    ))}
                </ZigzagSection>

                {/* ─── DIVIDER ─── */}
                <SectionDivider variant="atom" className="mb-20" />

                {/* ─── SERVICE CARDS GRID ─── */}
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <SectionLabel className="mb-4 block">Capabilities</SectionLabel>
                        <H2 className="text-[clamp(1.5rem,2vw+0.75rem,2rem)]">Full-Service Offerings</H2>
                    </div>
                </ScrollReveal>

                <BentoGrid columns={3} gap="md">
                    {serviceCards.map((card) => {
                        const IconComponent = ICON_MAP[card.icon] || Palette;
                        return (
                            <ServiceCard
                                key={card.title}
                                icon={<IconComponent className="w-6 h-6" />}
                                title={card.title}
                                description={card.description}
                                expandedDescription={card.expandedDescription}
                            />
                        );
                    })}
                </BentoGrid>
            </div>
        </section>
    );
}

export default Services;
