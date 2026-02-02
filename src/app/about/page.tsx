"use client";

import { Navbar } from "@/components/features/Navbar";
import { Footer } from "@/components/features/Footer";
import { H1, H2, Text, Lead, SectionLabel } from "@/components/ui/Typography";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { ParallaxBackground } from "@/components/motion/ParallaxBackground";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// ABOUT PAGE - "The Archive"
// Parchment mode with museum aesthetic
// ─────────────────────────────────────────────────────────────────────────────

export default function AboutPage() {
    return (
        <div id="main-content" className="min-h-screen">
            <Navbar />

            {/* Hero Section - Dark */}
            <section className="relative min-h-[60vh] flex items-center justify-center bg-museum overflow-hidden">
                {/* Background Image with Parallax */}
                <ParallaxBackground
                    src="/images/brand/backgrounds/philosophers.png"
                    speed={0.15}
                    opacity={0.3}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-museum/60 via-museum/80 to-museum z-[1]" />

                {/* Content */}
                <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center pt-32 pb-20">
                    <ScrollReveal>
                        <SectionLabel className="text-gold mb-4">Est. 2019</SectionLabel>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <H1 className="text-marble mb-6">
                            About <span className="text-gold">Thiink</span>
                        </H1>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <Lead className="text-marble/70 max-w-2xl mx-auto">
                            Guardians of timeless creative vision, merging ancient wisdom with digital innovation.
                        </Lead>
                    </ScrollReveal>
                </div>
            </section>

            {/* Main Content - Parchment Mode */}
            <main className="bg-parchment">
                {/* Vision Section */}
                <section className="py-20 md:py-32 border-b border-ink/10">
                    <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
                        <ScrollReveal>
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                                {/* Main Content */}
                                <div className="lg:col-span-8">
                                    <SectionLabel className="text-gold/80 block mb-4">Our Vision</SectionLabel>
                                    <H2 className="text-ink mb-8">Transcending Traditional Design</H2>

                                    <div className="space-y-6">
                                        <Text className="text-ink/80 text-lg leading-relaxed">
                                            <span className="font-cinzel text-4xl float-left mr-3 mt-1 text-gold leading-none">E</span>
                                            stablished in 2019, Thiink Media Graphics transcends traditional design agencies, embodying the role of guardians for a timeless creative vision. Merging ancient philosophical wisdom with modern digital innovation, we craft designs that resonate across eras, balancing enduring knowledge and contemporary creativity.
                                        </Text>

                                        <Text className="text-ink/80 text-lg leading-relaxed">
                                            Our ultimate goal is to redefine the benchmarks of creative agency excellence, transforming business identities into unforgettable brands that captivate visually and wield substantial strategic influence within their industries.
                                        </Text>
                                    </div>
                                </div>

                                {/* Side Note */}
                                <aside className="lg:col-span-4 lg:border-l lg:border-ink/10 lg:pl-8">
                                    <div className="font-pinyon text-2xl text-ink/40 mb-4 italic">
                                        "Design that demands attention"
                                    </div>
                                    <Text className="text-ink/60 text-sm">
                                        Our philosophy draws from the timeless principles of classical aesthetics, where every element serves both form and function.
                                    </Text>
                                </aside>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-20 md:py-32 border-b border-ink/10">
                    <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
                        <ScrollReveal>
                            <div className="text-center max-w-3xl mx-auto">
                                <SectionLabel className="text-gold/80 block mb-4">Our Mission</SectionLabel>
                                <H2 className="text-ink mb-8">Empowering Growth Through Design</H2>

                                <Text className="text-ink/80 text-xl leading-relaxed">
                                    At Thiink Media Graphics, we specialize in empowering small to medium-sized enterprises with innovative design and digital solutions that drive growth and success, fusing imaginative creativity with practical strategy in every partnership.
                                </Text>
                            </div>
                        </ScrollReveal>

                        {/* Stats */}
                        <ScrollReveal delay={0.2}>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-ink/10">
                                {[
                                    { value: "2019", label: "Established" },
                                    { value: "1000+", label: "Projects" },
                                    { value: "9", label: "Years Experience" },
                                    { value: "100%", label: "Client Satisfaction" },
                                ].map((stat, i) => (
                                    <div key={i} className="text-center">
                                        <div className="font-cinzel text-3xl md:text-4xl text-gold mb-2">
                                            {stat.value}
                                        </div>
                                        <div className="font-cormorant-sc text-xs uppercase tracking-widest text-ink/50">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Services Preview */}
                <section className="py-20 md:py-32 border-b border-ink/10">
                    <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <SectionLabel className="text-gold/80 block mb-4">What We Do</SectionLabel>
                                <H2 className="text-ink">Our Expertise</H2>
                            </div>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    title: "Core Identity",
                                    description: "Brand strategy, logo design, and visual identity systems that define who you are.",
                                },
                                {
                                    title: "Design Forge",
                                    description: "Marketing materials, social media assets, and campaign visuals that captivate.",
                                },
                                {
                                    title: "Web Artisan",
                                    description: "Websites and digital experiences that convert visitors into advocates.",
                                },
                                {
                                    title: "Print Craft",
                                    description: "Physical touchpoints from business cards to large-format displays.",
                                },
                            ].map((service, i) => (
                                <ScrollReveal key={i} delay={i * 0.1}>
                                    <div className="bg-marble/30 border border-ink/5 p-8 rounded-sm hover:border-gold/20 transition-colors duration-300">
                                        <div className="font-cormorant-sc text-xs uppercase tracking-widest text-gold/70 mb-3">
                                            0{i + 1}
                                        </div>
                                        <h3 className="font-cinzel text-lg text-ink mb-3">
                                            {service.title}
                                        </h3>
                                        <Text className="text-ink/60 text-sm">
                                            {service.description}
                                        </Text>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 md:py-32">
                    <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
                        <ScrollReveal>
                            <SectionLabel className="text-gold/80 block mb-4">Ready to Begin?</SectionLabel>
                            <H2 className="text-ink mb-6">Let's Create Something Timeless</H2>
                            <Text className="text-ink/70 max-w-2xl mx-auto mb-10">
                                Every great brand starts with a conversation. Tell us about your vision, and let's explore how we can bring it to life.
                            </Text>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="https://www.thiinkmediagraphics.com/new-project-form"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button variant="primary" size="lg">
                                        Start a Project
                                    </Button>
                                </a>
                                <Link href="/work">
                                    <Button variant="secondary" size="lg" className="border-ink text-ink hover:bg-ink hover:text-parchment">
                                        View Our Work
                                    </Button>
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
