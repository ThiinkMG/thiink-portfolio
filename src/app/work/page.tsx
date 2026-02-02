"use client";

import { PROJECTS } from "@/lib/data";
import { Navbar } from "@/components/features/Navbar";
import { Footer } from "@/components/features/Footer";
import { H1, Text, SectionLabel, Caption } from "@/components/ui/Typography";
import { ArtifactCard } from "@/components/ArtifactCard";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { motion } from "framer-motion";
import { easing } from "@/lib/motion";

// ─────────────────────────────────────────────────────────────────────────────
// WORK PAGE - "The Gallery"
// Portfolio index showcasing all projects
// ─────────────────────────────────────────────────────────────────────────────

export default function WorkPage() {
    return (
        <main id="main-content" className="bg-museum min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: easing.apple }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <span className="w-8 h-px bg-gold" />
                        <SectionLabel className="text-gold">Portfolio</SectionLabel>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1, ease: easing.apple }}
                    >
                        <H1 className="text-marble mb-6">Our Work</H1>
                        <Text className="text-xl text-marble/60 max-w-2xl">
                            A curated collection of brand identities, digital experiences, and creative projects
                            that showcase our commitment to design excellence.
                        </Text>
                    </motion.div>
                </div>
            </section>

            <SectionDivider variant="line" color="gold" size="md" />

            {/* Project Grid */}
            <section className="py-20 px-6 md:px-12 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    {/* Category filters could go here in future */}

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {PROJECTS.map((project, index) => (
                            <ScrollReveal key={project.slug} delay={index * 0.1}>
                                <ArtifactCard
                                    title={project.title}
                                    client={project.client}
                                    category={project.category}
                                    year={project.year}
                                    image={project.thumbnailImage}
                                    href={`/work/${project.slug}`}
                                />
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* Stats */}
                    <motion.div
                        className="mt-20 pt-12 border-t border-marble/10"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <span className="font-cinzel text-3xl md:text-4xl text-gold block mb-2">
                                    50+
                                </span>
                                <Caption className="text-marble/50">Projects Completed</Caption>
                            </div>
                            <div>
                                <span className="font-cinzel text-3xl md:text-4xl text-gold block mb-2">
                                    6
                                </span>
                                <Caption className="text-marble/50">Years Experience</Caption>
                            </div>
                            <div>
                                <span className="font-cinzel text-3xl md:text-4xl text-gold block mb-2">
                                    100%
                                </span>
                                <Caption className="text-marble/50">Client Satisfaction</Caption>
                            </div>
                            <div>
                                <span className="font-cinzel text-3xl md:text-4xl text-gold block mb-2">
                                    5
                                </span>
                                <Caption className="text-marble/50">Industries Served</Caption>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
