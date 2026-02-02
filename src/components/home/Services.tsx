"use client";

import { H2, SectionLabel, Text } from "@/components/ui/Typography";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { ZigzagSection, ZigzagItem, BentoGrid, ServiceCard } from "@/components/layouts/ZigzagSection";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Globe, Palette, Layers, Printer, Sparkles, Code } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// SERVICES SECTION - "The Craft"
// Museum-style presentation of service offerings
// ─────────────────────────────────────────────────────────────────────────────

const SERVICES = [
    {
        label: "Brand Identity",
        title: "The Foundation",
        description: "We forge brand identities that command attention and inspire loyalty. From strategic positioning to visual systems, we create the philosophical foundation your brand needs to thrive.",
        image: "/_design_references/Design Assets/Thiink MG Brand Assets/lordmoose_Golden_bas-relief_showing_young_Apollos_first_triumph_38b7a816-fce9-43f3-aed9-b35f7b5fbb52.png",
        cta: { text: "Explore Branding", href: "/services/branding" },
    },
    {
        label: "Web Design",
        title: "Digital Temples",
        description: "Your website should be more than a digital brochure—it should be a monument to your vision. We craft immersive web experiences that convert visitors into devoted followers.",
        image: "/_design_references/Design Assets/Thiink MG Brand Assets/lordmoose_The_Oracles_Vision_Mythic_bronze_relief_of_the_Pythia_a440e2b7-ec65-442d-990e-b5f28b0e8b16.png",
        cta: { text: "View Web Work", href: "/services/web" },
    },
    {
        label: "Visual Design",
        title: "Artisan Graphics",
        description: "From print collateral to digital assets, we create visual materials that elevate every touchpoint. Each piece is crafted with the precision of a Renaissance master.",
        image: "/_design_references/Design Assets/Thiink MG Brand Assets/lordmoose_Mythic_relief_showing_Platos_allegory_of_the_cave_sou_48b29f41-0a21-4b54-a7b9-a4e0cc30a31e.png",
        cta: { text: "See Graphics", href: "/services/graphics" },
    },
];

const SERVICE_CARDS = [
    {
        icon: <Palette className="w-6 h-6" />,
        title: "Logo Design",
        description: "Iconic marks that capture your brand's essence in a single symbol.",
    },
    {
        icon: <Layers className="w-6 h-6" />,
        title: "Brand Systems",
        description: "Comprehensive guidelines ensuring consistency across all touchpoints.",
    },
    {
        icon: <Globe className="w-6 h-6" />,
        title: "Web Development",
        description: "High-performance sites built with modern frameworks and best practices.",
    },
    {
        icon: <Code className="w-6 h-6" />,
        title: "UI/UX Design",
        description: "Intuitive interfaces that delight users and drive conversions.",
    },
    {
        icon: <Printer className="w-6 h-6" />,
        title: "Print Design",
        description: "Business cards, packaging, and collateral that make lasting impressions.",
    },
    {
        icon: <Sparkles className="w-6 h-6" />,
        title: "Creative Direction",
        description: "Strategic vision that guides every aspect of your visual identity.",
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 md:py-32 bg-obsidian">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                {/* ─── SECTION HEADER ─── */}
                <ScrollReveal className="text-center mb-16 md:mb-24">
                    <SectionLabel className="mb-4 block">Our Expertise</SectionLabel>
                    <H2 className="mb-6">The Craft</H2>
                    <Text className="max-w-2xl mx-auto text-marble/70">
                        We blend classical design principles with cutting-edge technology
                        to create brands that transcend trends and stand the test of time.
                    </Text>
                </ScrollReveal>

                {/* ─── ZIGZAG SERVICES ─── */}
                <ZigzagSection gap="xl" className="mb-24">
                    {SERVICES.map((service, index) => (
                        <ZigzagItem
                            key={service.title}
                            label={service.label}
                            title={service.title}
                            description={service.description}
                            image={service.image}
                            imageAlt={`${service.title} illustration`}
                            cta={service.cta}
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
                        <H2 className="text-2xl md:text-3xl">Full-Service Offerings</H2>
                    </div>
                </ScrollReveal>

                <BentoGrid columns={3} gap="md">
                    {SERVICE_CARDS.map((card) => (
                        <ServiceCard
                            key={card.title}
                            icon={card.icon}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
}

export default Services;
