"use client";

import { useState } from "react";
import { H2, SectionLabel, Text, H3 } from "@/components/ui/Typography";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { ParallaxBackground } from "@/components/motion/ParallaxBackground";
import { BentoGrid, ServiceCard } from "@/components/layouts/ZigzagSection";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { motion } from "framer-motion";
import { Globe, Palette, Layers, Printer, Sparkles, Code } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// PROCESS TIMELINE - "The Method"
// Museum-style process visualization with philosopher imagery
// ─────────────────────────────────────────────────────────────────────────────

const PROCESS_STEPS = [
    {
        number: "I",
        title: "Discovery",
        subtitle: "The Inquiry",
        description: "We begin with deep listening. Understanding your vision, audience, and aspirations forms the philosophical foundation of everything that follows.",
        details: ["Brand audit", "Market research", "Stakeholder interviews", "Vision alignment"],
    },
    {
        number: "II",
        title: "Strategy",
        subtitle: "The Architecture",
        description: "With insights gathered, we architect a strategic framework that positions your brand for lasting impact and meaningful differentiation.",
        details: ["Positioning", "Messaging framework", "Visual direction", "Competitive analysis"],
    },
    {
        number: "III",
        title: "Creation",
        subtitle: "The Craft",
        description: "Here, vision becomes form. We craft every element with the precision of Renaissance masters—logos, systems, experiences that transcend trends.",
        details: ["Design exploration", "Identity development", "System creation", "Iteration & refinement"],
    },
    {
        number: "IV",
        title: "Delivery",
        subtitle: "The Legacy",
        description: "Your brand is launched into the world with comprehensive guidelines and assets, ready to build its legacy across every touchpoint.",
        details: ["Brand guidelines", "Asset delivery", "Implementation support", "Launch strategy"],
    },
];

const SERVICE_CARDS = [
    {
        icon: <Palette className="w-6 h-6" />,
        title: "Logo Design",
        description: "Iconic marks that capture your brand's essence in a single symbol.",
        expandedDescription: "From concept sketches to final vector files, we craft logos that stand the test of time. Includes primary, secondary, and icon variations.",
    },
    {
        icon: <Layers className="w-6 h-6" />,
        title: "Brand Systems",
        description: "Comprehensive guidelines ensuring consistency across all touchpoints.",
        expandedDescription: "Complete brand books with typography, color palettes, imagery guidelines, and application examples for print and digital.",
    },
    {
        icon: <Globe className="w-6 h-6" />,
        title: "Web Development",
        description: "High-performance sites built with modern frameworks and best practices.",
        expandedDescription: "Custom websites built with Next.js, React, and modern technologies. Optimized for speed, SEO, and conversion.",
    },
    {
        icon: <Code className="w-6 h-6" />,
        title: "UI/UX Design",
        description: "Intuitive interfaces that delight users and drive conversions.",
        expandedDescription: "User research, wireframing, prototyping, and polished interface designs that balance aesthetics with usability.",
    },
    {
        icon: <Printer className="w-6 h-6" />,
        title: "Print Design",
        description: "Business cards, packaging, and collateral that make lasting impressions.",
        expandedDescription: "From business cards to packaging, brochures to banners—print materials that translate your digital brand into tactile experiences.",
    },
    {
        icon: <Sparkles className="w-6 h-6" />,
        title: "Creative Direction",
        description: "Strategic vision that guides every aspect of your visual identity.",
        expandedDescription: "High-level creative strategy and art direction to ensure all brand expressions align with your core vision and goals.",
    },
];

interface ProcessStepProps {
    step: typeof PROCESS_STEPS[0];
    index: number;
    isLast: boolean;
}

function ProcessStep({ step, index, isLast }: ProcessStepProps) {
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
                            {step.number}
                        </span>
                    </motion.div>
                    {/* Connecting Line */}
                    {!isLast && (
                        <div className="w-px h-full min-h-[120px] bg-gradient-to-b from-gold/50 to-transparent" />
                    )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-12 md:pb-16">
                    <div className="mb-2">
                        <span className="font-cormorant-sc text-xs uppercase tracking-widest text-gold/70">
                            {step.subtitle}
                        </span>
                    </div>
                    <H3 className="text-xl md:text-2xl mb-3 text-marble">{step.title}</H3>
                    <Text className="text-marble/70 mb-4 max-w-lg">
                        {step.description}
                    </Text>
                    {/* Detail Pills */}
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
                </div>
            </div>
        </ScrollReveal>
    );
}

export function ProcessTimeline() {
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
                src="/_design_references/Design Assets/Thiink MG Brand Assets/Thiink V3 BG - Philosophers Edited 1.png"
                speed={0.12}
                opacity={0.1}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/95 to-obsidian" />

            <div className="relative max-w-5xl mx-auto px-6 md:px-12 lg:px-20">
                {/* ─── SECTION HEADER ─── */}
                <ScrollReveal className="text-center mb-16 md:mb-20">
                    <SectionLabel className="mb-4 block">Our Approach</SectionLabel>
                    <H2 className="mb-6">The Method</H2>
                    <Text className="max-w-2xl mx-auto text-marble/70">
                        Like the ancient philosophers who sought truth through systematic inquiry,
                        we follow a proven methodology to uncover and craft your brand's essence.
                    </Text>
                </ScrollReveal>

                {/* ─── TIMELINE ─── */}
                <div className="relative">
                    {PROCESS_STEPS.map((step, index) => (
                        <ProcessStep
                            key={step.title}
                            step={step}
                            index={index}
                            isLast={index === PROCESS_STEPS.length - 1}
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
                    {SERVICE_CARDS.map((card) => (
                        <ServiceCard
                            key={card.title}
                            icon={card.icon}
                            title={card.title}
                            description={card.description}
                            expandedDescription={card.expandedDescription}
                            isExpanded={expandedCard === card.title}
                            onToggle={() => handleCardToggle(card.title)}
                        />
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
}

export default ProcessTimeline;
