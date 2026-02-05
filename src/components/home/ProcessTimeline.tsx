"use client";

import { useState } from "react";
import { H2, SectionLabel, Text, H3 } from "@/components/ui/Typography";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { ParallaxBackground } from "@/components/motion/ParallaxBackground";
import { BentoGrid, ServiceCard } from "@/components/layouts/ZigzagSection";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { motion } from "framer-motion";
import { Globe, Palette, Layers, Printer, Sparkles, Code } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// PROCESS TIMELINE - "The Method"
// Museum-style process visualization with philosopher imagery
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

interface ProcessStep {
    numeral: string;
    title: string;
    subtitle?: string;
    description: string;
    details?: string[];
    marginalia?: string;
}

interface ServiceCardData {
    title: string;
    description: string;
    expandedDescription?: string;
    icon: string;
}

interface ProcessTimelineProps {
    sectionLabel?: string;
    sectionTitle?: string;
    sectionDescription?: string;
    steps?: ProcessStep[];
    serviceCards?: ServiceCardData[];
}

// Default content for fallback
const DEFAULT_STEPS: ProcessStep[] = [
    {
        numeral: "I",
        title: "Discovery",
        subtitle: "The Inquiry",
        description: "We begin with deep listening. Understanding your vision, audience, and aspirations forms the philosophical foundation of everything that follows.",
        details: ["Brand audit", "Market research", "Stakeholder interviews", "Vision alignment"],
    },
    {
        numeral: "II",
        title: "Strategy",
        subtitle: "The Architecture",
        description: "With insights gathered, we architect a strategic framework that positions your brand for lasting impact and meaningful differentiation.",
        details: ["Positioning", "Messaging framework", "Visual direction", "Competitive analysis"],
    },
    {
        numeral: "III",
        title: "Creation",
        subtitle: "The Craft",
        description: "Here, vision becomes form. We craft every element with the precision of Renaissance masters—logos, systems, experiences that transcend trends.",
        details: ["Design exploration", "Identity development", "System creation", "Iteration & refinement"],
    },
    {
        numeral: "IV",
        title: "Delivery",
        subtitle: "The Legacy",
        description: "Your brand is launched into the world with comprehensive guidelines and assets, ready to build its legacy across every touchpoint.",
        details: ["Brand guidelines", "Asset delivery", "Implementation support", "Launch strategy"],
    },
];

const DEFAULT_SERVICE_CARDS: ServiceCardData[] = [
    { title: "Logo Design", description: "Iconic marks that capture your brand's essence in a single symbol.", expandedDescription: "From concept sketches to final vector files, we craft logos that stand the test of time. Includes primary, secondary, and icon variations.", icon: "Palette" },
    { title: "Brand Systems", description: "Comprehensive guidelines ensuring consistency across all touchpoints.", expandedDescription: "Complete brand books with typography, color palettes, imagery guidelines, and application examples for print and digital.", icon: "Layers" },
    { title: "Web Development", description: "High-performance sites built with modern frameworks and best practices.", expandedDescription: "Custom websites built with Next.js, React, and modern technologies. Optimized for speed, SEO, and conversion.", icon: "Globe" },
    { title: "UI/UX Design", description: "Intuitive interfaces that delight users and drive conversions.", expandedDescription: "User research, wireframing, prototyping, and polished interface designs that balance aesthetics with usability.", icon: "Code" },
    { title: "Print Design", description: "Business cards, packaging, and collateral that make lasting impressions.", expandedDescription: "From business cards to packaging, brochures to banners—print materials that translate your digital brand into tactile experiences.", icon: "Printer" },
    { title: "Creative Direction", description: "Strategic vision that guides every aspect of your visual identity.", expandedDescription: "High-level creative strategy and art direction to ensure all brand expressions align with your core vision and goals.", icon: "Sparkles" },
];

interface ProcessStepComponentProps {
    step: ProcessStep;
    index: number;
    isLast: boolean;
}

function ProcessStepComponent({ step, index, isLast }: ProcessStepComponentProps) {
    return (
        <ScrollReveal delay={index * 0.1}>
            <div className="relative flex gap-6 md:gap-10">
                {/* Timeline Line */}
                <div className="flex flex-col items-center">
                    {/* Number Circle */}
                    <motion.div
                        className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-gold/50 flex items-center justify-center bg-obsidian/80 backdrop-blur-sm"
                        whileHover={{ scale: 1.05, borderColor: "rgb(212, 168, 85)" }}
                        transition={{ duration: 0.2 }}
                    >
                        <span className="font-cinzel text-lg md:text-xl text-gold font-semibold">
                            {step.numeral}
                        </span>
                    </motion.div>
                    {/* Connecting Line */}
                    {!isLast && (
                        <div className="w-px h-full min-h-[120px] bg-gradient-to-b from-gold/50 to-transparent" />
                    )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-12 md:pb-16">
                    {step.subtitle && (
                        <div className="mb-2">
                            <span className="font-cormorant-sc text-xs uppercase tracking-widest text-gold/70">
                                {step.subtitle}
                            </span>
                        </div>
                    )}
                    <H3 className="text-xl md:text-2xl mb-3 text-marble">{step.title}</H3>
                    <Text className="text-marble/70 mb-4 max-w-lg">
                        {step.description}
                    </Text>
                    {/* Detail Pills */}
                    {step.details && step.details.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {step.details.map((detail) => (
                                <span
                                    key={detail}
                                    className="px-3 py-1 text-xs font-outfit uppercase tracking-wider text-marble/50 border border-marble/10 rounded-full"
                                >
                                    {detail}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </ScrollReveal>
    );
}

export function ProcessTimeline({
    sectionLabel = "Our Approach",
    sectionTitle = "The Method",
    sectionDescription = "Like the ancient philosophers who sought truth through systematic inquiry, we follow a proven methodology to uncover and craft your brand's essence.",
    steps = DEFAULT_STEPS,
    serviceCards = DEFAULT_SERVICE_CARDS,
}: ProcessTimelineProps) {
    // Track which service card is expanded (null = none)
    const [expandedCard, setExpandedCard] = useState<string | null>(null);

    const handleCardToggle = (title: string) => {
        // If clicking the same card, close it. Otherwise, open the new one.
        setExpandedCard(expandedCard === title ? null : title);
    };

    return (
        <section id="services" className="relative py-24 md:py-32 bg-obsidian overflow-hidden">
            {/* Background Image - Philosophers with Parallax */}
            <ParallaxBackground
                src="/images/brand/backgrounds/philosophers.png"
                speed={0.12}
                opacity={0.1}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/95 to-obsidian" />

            <div className="relative max-w-5xl mx-auto px-6 md:px-12 lg:px-20">
                {/* ─── SECTION HEADER ─── */}
                <ScrollReveal className="text-center mb-16 md:mb-20">
                    <SectionLabel className="mb-4 block">{sectionLabel}</SectionLabel>
                    <H2 className="mb-6">{sectionTitle}</H2>
                    <Text className="max-w-2xl mx-auto text-marble/70">
                        {sectionDescription}
                    </Text>
                </ScrollReveal>

                {/* ─── TIMELINE ─── */}
                <div className="relative">
                    {steps.map((step, index) => (
                        <ProcessStepComponent
                            key={step.title}
                            step={step}
                            index={index}
                            isLast={index === steps.length - 1}
                        />
                    ))}
                </div>

                {/* ─── DIVIDER ─── */}
                <SectionDivider variant="atom" className="my-20" />

                {/* ─── SERVICE CARDS GRID ─── */}
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <SectionLabel className="mb-4 block">Capabilities</SectionLabel>
                        <H2 className="text-2xl md:text-3xl">Full-Service Offerings</H2>
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
                                isExpanded={expandedCard === card.title}
                                onToggle={() => handleCardToggle(card.title)}
                            />
                        );
                    })}
                </BentoGrid>
            </div>
        </section>
    );
}

export default ProcessTimeline;
