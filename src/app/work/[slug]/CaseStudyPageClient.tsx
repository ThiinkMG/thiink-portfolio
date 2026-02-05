"use client";

import { Navbar } from "@/components/features/Navbar";
import { Footer } from "@/components/features/Footer";
import { H1, H2, H3, Text, Lead, SectionLabel, Caption, DropCap } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { TwoColumnText, Marginalia } from "@/components/layouts/TwoColumnText";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { easing } from "@/lib/motion";
import type { Project, SiteSettings } from "@/lib/types";

// ─────────────────────────────────────────────────────────────────────────────
// CASE STUDY PAGE CLIENT - "The Reading Room"
// Light parchment mode with STAR format content structure
// ─────────────────────────────────────────────────────────────────────────────

interface CaseStudyPageClientProps {
    project: Project;
    nextProject: Project;
    siteSettings?: SiteSettings | null;
}

export function CaseStudyPageClient({ project, nextProject, siteSettings }: CaseStudyPageClientProps) {
    return (
        <main id="main-content" className="min-h-screen">
            {/* Navigation - stays dark for contrast */}
            <Navbar
                logo={siteSettings?.navbar?.logo}
                ctaText={siteSettings?.navbar?.ctaText}
                ctaLink={siteSettings?.navbar?.ctaLink}
                links={siteSettings?.navbar?.links}
            />

            {/* ─── HERO SECTION ─── Dark transition zone */}
            <CaseStudyHero project={project} />

            {/* ─── PARCHMENT CONTENT ─── Light "Reading Room" */}
            <div className="bg-parchment">
                {/* Project Overview */}
                <ProjectOverview project={project} />

                {/* STAR Format Sections */}
                <SituationSection project={project} />
                <TaskSection project={project} />
                <ActionSection project={project} />
                <ResultSection project={project} />

                {/* Gallery */}
                <GallerySection project={project} />

                {/* Videos (if available) */}
                <VideoSection project={project} />

                {/* Deliverables */}
                <DeliverablesSection project={project} />

                {/* Next Project */}
                <NextProjectSection nextProject={nextProject} />
            </div>

            {/* Footer - back to dark */}
            <Footer
                logo={siteSettings?.navbar?.logo}
                tagline={siteSettings?.footer?.tagline}
                copyright={siteSettings?.footer?.copyright}
                serviceLinks={siteSettings?.footer?.serviceLinks}
                exploreLinks={siteSettings?.footer?.exploreLinks}
                contact={siteSettings?.contact}
                social={siteSettings?.social}
            />
        </main>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// HERO SECTION - Dark zone with hero image
// ─────────────────────────────────────────────────────────────────────────────

function CaseStudyHero({ project }: { project: Project }) {
    return (
        <section className="relative min-h-[80vh] flex items-end bg-museum overflow-hidden">
            {/* Hero Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    className="object-cover object-center"
                    priority
                    quality={90}
                />
                {/* Gradient overlays for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-museum via-museum/60 to-museum/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-museum/80 via-transparent to-transparent" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-16 pt-32">
                {/* Back Link */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: easing.apple }}
                >
                    <Link
                        href="/work"
                        className="inline-flex items-center gap-2 text-marble/60 hover:text-gold transition-colors mb-8 font-outfit uppercase tracking-widest text-xs"
                    >
                        <ArrowLeft size={14} />
                        Back to Work
                    </Link>
                </motion.div>

                {/* Meta Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: easing.apple }}
                    className="flex flex-wrap items-center gap-4 mb-6"
                >
                    <SectionLabel className="text-gold">{project.category}</SectionLabel>
                    <span className="w-px h-4 bg-marble/20" />
                    <Caption className="text-marble/60">{project.client}</Caption>
                    <span className="w-px h-4 bg-marble/20" />
                    <Caption className="text-marble/60">{project.year}</Caption>
                </motion.div>

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: easing.apple }}
                >
                    <H1 className="text-marble mb-4">{project.title}</H1>
                    <Text className="text-xl md:text-2xl text-marble/70 max-w-2xl font-garamond">
                        {project.subtitle}
                    </Text>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-marble/40"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
            </motion.div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// PROJECT OVERVIEW - Quick stats and description
// ─────────────────────────────────────────────────────────────────────────────

function ProjectOverview({ project }: { project: Project }) {
    return (
        <section className="py-20 border-b border-ink/10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                <ScrollReveal>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Left: Project Details */}
                        <div className="lg:col-span-4 space-y-8">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <Caption className="text-ink/50 block mb-2">Client</Caption>
                                    <p className="font-cinzel text-ink">{project.client}</p>
                                </div>
                                <div>
                                    <Caption className="text-ink/50 block mb-2">Year</Caption>
                                    <p className="font-cinzel text-ink">{project.year}</p>
                                </div>
                                <div>
                                    <Caption className="text-ink/50 block mb-2">Duration</Caption>
                                    <p className="font-cinzel text-ink">{project.duration}</p>
                                </div>
                                <div>
                                    <Caption className="text-ink/50 block mb-2">Category</Caption>
                                    <p className="font-cinzel text-ink">{project.category}</p>
                                </div>
                            </div>

                            {/* Color Palette */}
                            {project.colors && (
                                <div>
                                    <Caption className="text-ink/50 block mb-3">Color Palette</Caption>
                                    <div className="flex gap-2">
                                        {project.colors.map((color, i) => (
                                            <div
                                                key={i}
                                                className="w-10 h-10 rounded-sm border border-ink/10 shadow-sm"
                                                style={{ backgroundColor: color }}
                                                title={color}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Metrics */}
                            {project.metrics && (
                                <div className="pt-6 border-t border-ink/10">
                                    <Caption className="text-ink/50 block mb-4">Results</Caption>
                                    <div className="space-y-3">
                                        {project.metrics.map((metric, i) => (
                                            <div key={i} className="flex justify-between items-baseline">
                                                <span className="font-garamond text-ink/70">{metric.label}</span>
                                                <span className="font-cinzel text-gold text-lg">{metric.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right: Description */}
                        <div className="lg:col-span-7 lg:col-start-6">
                            <DropCap className="text-ink/90 text-lg leading-relaxed">
                                {project.description}
                            </DropCap>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// SITUATION SECTION - STAR Format
// ─────────────────────────────────────────────────────────────────────────────

function SituationSection({ project }: { project: Project }) {
    return (
        <section className="py-20 border-b border-ink/10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                <ScrollReveal>
                    <TwoColumnText
                        ratio="1:2"
                        left={
                            <div>
                                <SectionLabel className="text-gold block mb-3 text-base">I.</SectionLabel>
                                <H2 className="text-ink">Situation</H2>
                            </div>
                        }
                        right={
                            <Lead className="text-ink/80 leading-relaxed">
                                {project.situation}
                            </Lead>
                        }
                    />
                </ScrollReveal>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// TASK SECTION - STAR Format
// ─────────────────────────────────────────────────────────────────────────────

function TaskSection({ project }: { project: Project }) {
    return (
        <section className="py-20 border-b border-ink/10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                <ScrollReveal>
                    <TwoColumnText
                        ratio="1:2"
                        left={
                            <div>
                                <SectionLabel className="text-gold block mb-3 text-base">II.</SectionLabel>
                                <H2 className="text-ink">Task</H2>
                            </div>
                        }
                        right={
                            <Lead className="text-ink/80 leading-relaxed">
                                {project.task}
                            </Lead>
                        }
                    />
                </ScrollReveal>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// ACTION SECTION - STAR Format with Marginalia
// ─────────────────────────────────────────────────────────────────────────────

function ActionSection({ project }: { project: Project }) {
    return (
        <section className="py-20 border-b border-ink/10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                {/* Section Header */}
                <ScrollReveal>
                    <div className="mb-16">
                        <SectionLabel className="text-gold block mb-3 text-base">III.</SectionLabel>
                        <H2 className="text-ink">Action</H2>
                    </div>
                </ScrollReveal>

                {/* Action Steps with Marginalia */}
                <div className="space-y-16">
                    {project.action.map((step, i) => (
                        <ScrollReveal key={i}>
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                                {/* Marginalia - Left side on desktop */}
                                <div className="hidden lg:block lg:col-span-3">
                                    {step.marginalia && (
                                        <Marginalia position="right">
                                            <span className="block font-pinyon text-gold text-lg mb-2">
                                                Curator's Note
                                            </span>
                                            {step.marginalia}
                                        </Marginalia>
                                    )}
                                </div>

                                {/* Main Content */}
                                <div className="lg:col-span-8 lg:col-start-5">
                                    <div className="flex items-baseline gap-4 mb-4">
                                        <span className="font-cormorant-sc text-gold text-base">
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <h4 className="font-cinzel text-xl text-ink">
                                            {step.title}
                                        </h4>
                                    </div>
                                    <Text className="text-ink/80 leading-relaxed">
                                        {step.content}
                                    </Text>

                                    {/* Marginalia - Below on mobile */}
                                    {step.marginalia && (
                                        <div className="lg:hidden mt-6 pl-4 border-l-2 border-gold/40">
                                            <span className="block font-pinyon text-gold text-sm mb-1">
                                                Curator's Note
                                            </span>
                                            <p className="text-sm text-ink/70 italic font-garamond">
                                                {step.marginalia}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// RESULT SECTION - STAR Format
// ─────────────────────────────────────────────────────────────────────────────

function ResultSection({ project }: { project: Project }) {
    return (
        <section className="py-20 border-b border-ink/10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                <ScrollReveal>
                    <TwoColumnText
                        ratio="1:2"
                        left={
                            <div>
                                <SectionLabel className="text-gold block mb-3 text-base">IV.</SectionLabel>
                                <H2 className="text-ink">Result</H2>
                            </div>
                        }
                        right={
                            <Lead className="text-ink/80 leading-relaxed">
                                {project.result}
                            </Lead>
                        }
                    />
                </ScrollReveal>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// GALLERY SECTION
// ─────────────────────────────────────────────────────────────────────────────

function GallerySection({ project }: { project: Project }) {
    if (!project.gallery || project.gallery.length === 0) return null;

    return (
        <section className="py-20 border-b border-ink/10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                <ScrollReveal>
                    <div className="mb-12">
                        <SectionLabel className="text-gold/80 block mb-3">Gallery</SectionLabel>
                        <H3 className="text-ink">Project Showcase</H3>
                    </div>
                </ScrollReveal>

                <ProjectGallery images={project.gallery} />
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// VIDEO SECTION - Project videos showcase
// ─────────────────────────────────────────────────────────────────────────────

function VideoSection({ project }: { project: Project }) {
    if (!project.videos || project.videos.length === 0) return null;

    // Helper to check if URL is a YouTube embed
    const isYouTubeEmbed = (url: string) => url.includes('youtube.com/embed');

    return (
        <section className="py-20 border-b border-ink/10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                <ScrollReveal>
                    <div className="mb-12">
                        <SectionLabel className="text-gold/80 block mb-3">Video</SectionLabel>
                        <H3 className="text-ink">In Motion</H3>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 gap-8">
                    {project.videos.map((video, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <div className="bg-ink/5 rounded-sm overflow-hidden">
                                {/* Video Player - YouTube iframe or native video */}
                                <div className="relative aspect-video bg-ink/10">
                                    {isYouTubeEmbed(video.src) ? (
                                        <iframe
                                            src={video.src}
                                            title={video.title}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                            className="absolute inset-0 w-full h-full"
                                        />
                                    ) : (
                                        <video
                                            src={video.src}
                                            controls
                                            className="w-full h-full object-contain"
                                            poster={video.thumbnail}
                                            preload="metadata"
                                        >
                                            Your browser does not support the video tag.
                                        </video>
                                    )}
                                </div>

                                {/* Video Info */}
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                                            <Play size={14} className="text-gold ml-0.5" />
                                        </div>
                                        <h4 className="font-cinzel text-ink">{video.title}</h4>
                                    </div>
                                    {video.description && (
                                        <p className="font-garamond text-ink/60 text-sm ml-11">
                                            {video.description}
                                        </p>
                                    )}
                                    {video.warning && (
                                        <p className="font-garamond text-sm ml-11 mt-1 italic text-red-600">
                                            * {video.warning}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// DELIVERABLES SECTION
// ─────────────────────────────────────────────────────────────────────────────

function DeliverablesSection({ project }: { project: Project }) {
    if (!project.deliverables || project.deliverables.length === 0) return null;

    return (
        <section className="py-20 border-b border-ink/10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                <ScrollReveal>
                    <TwoColumnText
                        ratio="1:2"
                        left={
                            <div>
                                <SectionLabel className="text-gold/80 block mb-3">Deliverables</SectionLabel>
                                <H3 className="text-ink">What We Created</H3>
                            </div>
                        }
                        right={
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.deliverables.map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center gap-3 font-garamond text-ink/80"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        }
                    />
                </ScrollReveal>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// NEXT PROJECT SECTION
// ─────────────────────────────────────────────────────────────────────────────

function NextProjectSection({ nextProject }: { nextProject: Project }) {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <Caption className="text-ink/50 block mb-2">Continue Exploring</Caption>
                        <H2 className="text-ink">Next Project</H2>
                    </div>

                    <Link href={`/work/${nextProject.slug}`} className="block group">
                        <div className="relative aspect-[21/9] rounded-sm overflow-hidden bg-ink/5">
                            <Image
                                src={nextProject.thumbnailImage}
                                alt={nextProject.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />

                            {/* Content overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                                <SectionLabel className="text-gold block mb-2">
                                    {nextProject.category}
                                </SectionLabel>
                                <h3 className="font-cinzel text-3xl md:text-4xl text-marble mb-2">
                                    {nextProject.title}
                                </h3>
                                <p className="font-garamond text-marble/70">
                                    {nextProject.subtitle}
                                </p>

                                <div className="mt-6 inline-flex items-center gap-2 font-outfit text-xs uppercase tracking-widest text-gold group-hover:gap-4 transition-all">
                                    View Case Study
                                    <ArrowRight size={14} />
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* CTAs */}
                    <div className="mt-16 text-center">
                        <p className="font-garamond text-ink/60 mb-6">
                            Ready to create something remarkable?
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="https://www.thiinkmediagraphics.com/new-project-form">
                                <Button variant="primary" size="lg">
                                    Start Your Project
                                </Button>
                            </Link>
                            <Link href="/work">
                                <Button variant="secondary" size="lg" className="border-ink text-ink hover:border-gold hover:text-gold">
                                    See All Projects
                                </Button>
                            </Link>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
