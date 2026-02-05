"use client";

import { H2, Text } from "@/components/ui/Typography";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { ParallaxBackground } from "@/components/motion/ParallaxBackground";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// CTA BAND - "Begin Your Journey"
// Full-width call-to-action with textured parallax background
// ─────────────────────────────────────────────────────────────────────────────

interface CTABandProps {
    headline?: string;
    subtext?: string;
    buttonText?: string;
    buttonLink?: string;
    secondaryButtonText?: string;
    secondaryButtonLink?: string;
    trustLine?: string;
    backgroundImage?: string;
    backgroundOpacity?: number;
}

export function CTABand({
    headline = "Ready to Build Your Legacy?",
    subtext = "Every great brand starts with a conversation. Let's discuss how we can transform your vision into a timeless identity that commands attention.",
    buttonText = "Start Your Project",
    buttonLink = "https://www.thiinkmediagraphics.com/new-project-form",
    secondaryButtonText = "View Our Work",
    secondaryButtonLink = "/work",
    trustLine = "Trusted by 100+ visionary brands worldwide",
    backgroundImage = "/images/brand/backgrounds/blue-linen.png",
    backgroundOpacity = 1,
}: CTABandProps) {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Background Image - Blue Linen Cool with Parallax */}
            <ParallaxBackground
                src={backgroundImage}
                speed={0.1}
                opacity={backgroundOpacity}
            />
            {/* Dark Overlay - Heavy for text legibility */}
            <div className="absolute inset-0 bg-bigstone/80" />
            <div className="absolute inset-0 bg-gradient-to-br from-bigstone/40 via-bigstone/20 to-bigstone/40" />
            {/* Gold accent gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent" />

            <div className="relative max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
                <ScrollReveal>
                    {/* Decorative Element */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="w-12 h-px bg-gold/50" />
                        <div className="w-2 h-2 rotate-45 border border-gold/50" />
                        <div className="w-12 h-px bg-gold/50" />
                    </div>

                    {/* Headline */}
                    <H2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-white drop-shadow-lg">
                        {headline}
                    </H2>

                    {/* Subtext */}
                    <Text className="text-lg md:text-xl text-marble/90 max-w-2xl mx-auto mb-10">
                        {subtext}
                    </Text>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href={buttonLink}>
                            <Button variant="primary" size="lg" className="min-w-[200px]">
                                {buttonText}
                            </Button>
                        </Link>
                        <Link href={secondaryButtonLink}>
                            <motion.span
                                className="inline-flex items-center gap-2 font-outfit text-sm uppercase tracking-widest text-marble hover:text-gold transition-colors duration-200 group"
                                whileHover={{ x: 5 }}
                            >
                                {secondaryButtonText}
                                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                                    →
                                </span>
                            </motion.span>
                        </Link>
                    </div>

                    {/* Trust Indicator */}
                    <div className="mt-12 pt-8 border-t border-marble/20">
                        <p className="font-cormorant-sc text-xs uppercase tracking-widest text-marble/60">
                            {trustLine}
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}

export default CTABand;
