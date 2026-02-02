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

export function CTABand() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Background Image - Blue Linen Cool with Parallax */}
            <ParallaxBackground
                src="/images/brand/backgrounds/blue-linen.png"
                speed={0.1}
                opacity={1}
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-bigstone/95 via-bigstone/90 to-bigstone/95" />
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
                    <H2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-marble">
                        Ready to Build Your Legacy?
                    </H2>

                    {/* Subtext */}
                    <Text className="text-lg md:text-xl text-marble/70 max-w-2xl mx-auto mb-10">
                        Every great brand starts with a conversation. Let's discuss how we can
                        transform your vision into a timeless identity that commands attention.
                    </Text>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="https://www.thiinkmediagraphics.com/new-project-form">
                            <Button variant="primary" size="lg" className="min-w-[200px]">
                                Start Your Project
                            </Button>
                        </Link>
                        <Link href="/work">
                            <motion.span
                                className="inline-flex items-center gap-2 font-outfit text-sm uppercase tracking-widest text-marble/70 hover:text-gold transition-colors duration-200 group"
                                whileHover={{ x: 5 }}
                            >
                                View Our Work
                                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                                    →
                                </span>
                            </motion.span>
                        </Link>
                    </div>

                    {/* Trust Indicator */}
                    <div className="mt-12 pt-8 border-t border-marble/10">
                        <p className="font-cormorant-sc text-xs uppercase tracking-widest text-marble/40">
                            Trusted by 100+ visionary brands worldwide
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}

export default CTABand;
