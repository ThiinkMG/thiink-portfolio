"use client";

import * as React from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { H1, Text, SectionLabel } from "@/components/ui/Typography";
import { easing, duration } from "@/lib/motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { PROJECTS } from "@/lib/data";

// ─────────────────────────────────────────────────────────────────────────────
// HERO SECTION - Portfolio-Focused "The Gallery Entrance"
// Showcases actual work with rotating featured projects (all 9 clients)
// ─────────────────────────────────────────────────────────────────────────────

// Map projects from data.ts for hero showcase
const FEATURED_PROJECTS = PROJECTS.map((p) => ({
    title: p.title,
    category: p.category,
    image: p.thumbnailImage,
    href: `/work/${p.slug}`,
}));

// Stagger Text Animation Component
function StaggerText({
    text,
    delay = 0,
    className
}: {
    text: string;
    delay?: number;
    className?: string;
}) {
    const words = text.split(" ");

    return (
        <span className={className}>
            {words.map((word, i) => (
                <span
                    key={i}
                    className="inline-block overflow-hidden mr-[0.25em] -mb-[0.1em] align-bottom pb-[0.1em]"
                >
                    <motion.span
                        className="inline-block"
                        initial={{ y: "110%" }}
                        animate={{ y: 0 }}
                        transition={{
                            duration: 0.7,
                            ease: easing.apple,
                            delay: delay + i * 0.05,
                        }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </span>
    );
}

// Project thumbnail for mini gallery
function ProjectThumb({
    project,
    isActive,
    isHovered,
    onHoverStart,
    onHoverEnd,
    onClick,
    index,
}: {
    project: typeof FEATURED_PROJECTS[0];
    isActive: boolean;
    isHovered: boolean;
    onHoverStart: () => void;
    onHoverEnd: () => void;
    onClick: () => void;
    index: number;
}) {
    return (
        <Link href={project.href}>
            <motion.div
                onClick={(e) => {
                    e.preventDefault();
                    onClick();
                }}
                onHoverStart={onHoverStart}
                onHoverEnd={onHoverEnd}
                className={cn(
                    "relative rounded-sm overflow-hidden border-2 transition-all duration-300 cursor-pointer",
                    isActive
                        ? "border-gold ring-2 ring-gold/30"
                        : "border-marble/20 hover:border-gold/50 grayscale hover:grayscale-0",
                    // Expand effect on hover
                    isHovered ? "w-28 h-28 md:w-36 md:h-36 z-10" : "w-20 h-20 md:w-24 md:h-24"
                )}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    scale: isHovered ? 1.1 : (isActive ? 1.05 : 1)
                }}
                transition={{
                    delay: index < 3 ? 1.2 + index * 0.1 : 0,
                    duration: 0.3,
                    ease: easing.apple
                }}
            >
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                />
                {/* Title overlay on hover */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-gradient-to-t from-museum/90 via-museum/40 to-transparent flex items-end p-2"
                        >
                            <span className="font-cormorant-sc text-[10px] text-marble/90 uppercase tracking-wider truncate">
                                {project.title}
                            </span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </Link>
    );
}

export function Hero() {
    const [activeProject, setActiveProject] = React.useState(0);
    const [hoveredThumb, setHoveredThumb] = React.useState<number | null>(null);
    const [isPaused, setIsPaused] = React.useState(false);
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);

    // Auto-rotate projects every 7 seconds (pauses on hover)
    React.useEffect(() => {
        if (isPaused) return;

        const timer = setInterval(() => {
            setActiveProject((prev) => (prev + 1) % FEATURED_PROJECTS.length);
        }, 7000);
        return () => clearInterval(timer);
    }, [isPaused]);

    const currentProject = FEATURED_PROJECTS[activeProject];

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-museum">
            {/* ─── FEATURED PROJECT BACKGROUND ─── */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeProject}
                    className="absolute inset-0 z-0"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.8, ease: easing.apple }}
                >
                    <Image
                        src={currentProject.image}
                        alt={currentProject.title}
                        fill
                        className="object-cover object-center"
                        priority
                        quality={90}
                    />
                    {/* Museum overlay - creates depth */}
                    <div className="absolute inset-0 bg-gradient-to-r from-museum via-museum/85 to-museum/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-museum via-museum/50 to-transparent" />
                    {/* Subtle vignette */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,5,0.4)_100%)]" />
                </motion.div>
            </AnimatePresence>

            {/* ─── CONTENT CONTAINER ─── */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[70vh]">
                    {/* ─── LEFT: TEXT CONTENT (5 cols) ─── */}
                    <motion.div
                        className="lg:col-span-5 space-y-6"
                        style={{ opacity }}
                    >
                        {/* Label */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: duration.slow, delay: 0.1, ease: easing.apple }}
                            className="flex items-center gap-3"
                        >
                            <span className="w-8 h-px bg-gold" />
                            <SectionLabel className="text-gold">Creative Studio</SectionLabel>
                        </motion.div>

                        {/* Headline - Portfolio focused */}
                        <H1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
                            <StaggerText
                                text="Design That"
                                delay={0.2}
                                className="block text-marble"
                            />
                            <StaggerText
                                text="Demands Attention"
                                delay={0.4}
                                className="block text-gold"
                            />
                        </H1>

                        {/* Subheadline - Work focused */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: duration.slow, delay: 0.7, ease: easing.apple }}
                        >
                            <Text className="text-base md:text-lg max-w-md text-marble/70 leading-relaxed">
                                Brand identities, digital experiences, and visual systems
                                for companies that want to be remembered.
                            </Text>
                        </motion.div>

                        {/* CTAs - Work as primary */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: duration.slow, delay: 0.9, ease: easing.apple }}
                            className="flex flex-wrap gap-4 pt-2"
                        >
                            <Link href="/work">
                                <Button variant="primary" size="lg">
                                    View Our Work
                                </Button>
                            </Link>
                            <Link href="https://www.thiinkmediagraphics.com/new-project-form">
                                <Button variant="secondary" size="lg">
                                    Start a Project
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* ─── CENTER: SPACER ─── */}
                    <div className="hidden lg:block lg:col-span-3" />

                    {/* ─── RIGHT: FEATURED PROJECT INFO (4 cols) ─── */}
                    <motion.div
                        className="lg:col-span-4 flex flex-col items-start lg:items-end gap-6"
                        style={{ opacity }}
                    >
                        {/* Current project info */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeProject}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, ease: easing.apple }}
                                className="text-right hidden lg:block"
                            >
                                <Link href={currentProject.href} className="group">
                                    <span className="font-cormorant-sc text-xs uppercase tracking-widest text-gold/70 block mb-1">
                                        Featured Work
                                    </span>
                                    <span className="font-cinzel text-2xl text-marble group-hover:text-gold transition-colors duration-200 block">
                                        {currentProject.title}
                                    </span>
                                    <span className="font-garamond text-sm text-marble/50 block">
                                        {currentProject.category}
                                    </span>
                                </Link>
                            </motion.div>
                        </AnimatePresence>

                        {/* Project thumbnails - shows 3 at a time, cycles through all 9 */}
                        <div className="flex gap-3 lg:justify-end items-center">
                            {(() => {
                                // Show 3 thumbnails centered around active project
                                const totalProjects = FEATURED_PROJECTS.length;
                                const visibleIndices = [
                                    (activeProject - 1 + totalProjects) % totalProjects,
                                    activeProject,
                                    (activeProject + 1) % totalProjects,
                                ];
                                return visibleIndices.map((projectIndex, displayIndex) => (
                                    <ProjectThumb
                                        key={`${projectIndex}-${FEATURED_PROJECTS[projectIndex].title}`}
                                        project={FEATURED_PROJECTS[projectIndex]}
                                        isActive={projectIndex === activeProject}
                                        isHovered={hoveredThumb === projectIndex}
                                        onHoverStart={() => {
                                            setHoveredThumb(projectIndex);
                                            setIsPaused(true);
                                        }}
                                        onHoverEnd={() => {
                                            setHoveredThumb(null);
                                            setIsPaused(false);
                                        }}
                                        onClick={() => {
                                            // Navigate to project on click
                                            window.location.href = FEATURED_PROJECTS[projectIndex].href;
                                        }}
                                        index={displayIndex}
                                    />
                                ));
                            })()}
                        </div>

                        {/* View all work link */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 0.5 }}
                            className="lg:text-right"
                        >
                            <Link
                                href="/work"
                                className="inline-flex items-center gap-2 font-outfit text-xs uppercase tracking-widest text-marble/50 hover:text-gold transition-colors duration-200 group"
                            >
                                Explore all projects
                                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* ─── BOTTOM STATS BAR ─── */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 z-10 border-t border-marble/10 bg-museum/80 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.6, ease: easing.apple }}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-4">
                    <div className="flex items-center justify-between">
                        {/* Stats */}
                        <div className="flex items-center gap-8 md:gap-12">
                            <div>
                                <span className="font-cinzel text-xl md:text-2xl text-gold">1000+</span>
                                <span className="font-cormorant-sc text-xs tracking-wider text-marble/40 ml-2">
                                    Projects
                                </span>
                            </div>
                            <div className="hidden sm:block">
                                <span className="font-cinzel text-xl md:text-2xl text-gold">9</span>
                                <span className="font-cormorant-sc text-xs tracking-wider text-marble/40 ml-2">
                                    Years
                                </span>
                            </div>
                            <div className="hidden md:block">
                                <span className="font-cinzel text-xl md:text-2xl text-gold">100%</span>
                                <span className="font-cormorant-sc text-xs tracking-wider text-marble/40 ml-2">
                                    Client Satisfaction
                                </span>
                            </div>
                        </div>

                        {/* Scroll indicator */}
                        <motion.div
                            className="flex items-center gap-2 text-marble/40"
                            animate={{ y: [0, 4, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <span className="font-cormorant-sc text-xs tracking-widest uppercase hidden sm:inline">
                                Scroll
                            </span>
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                />
                            </svg>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default Hero;
