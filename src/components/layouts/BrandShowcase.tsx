"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { easing } from "@/lib/motion";
import { ReactNode } from "react";
import Image from "next/image";
import { Caption } from "@/components/ui/Typography";

// ─────────────────────────────────────────────────────────────────────────────
// BRAND SHOWCASE
// Museum-style grid for displaying brand assets, logos, and deliverables
// ─────────────────────────────────────────────────────────────────────────────

interface BrandShowcaseProps {
    children: ReactNode;
    /** Grid columns */
    columns?: 2 | 3 | 4;
    /** Gap size */
    gap?: 'sm' | 'md' | 'lg';
    /** Additional CSS classes */
    className?: string;
}

export function BrandShowcase({
    children,
    columns = 3,
    gap = 'md',
    className,
}: BrandShowcaseProps) {
    const columnClasses = {
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
    };

    const gapClasses = {
        sm: 'gap-4',
        md: 'gap-6',
        lg: 'gap-8',
    };

    return (
        <div className={cn(
            "grid",
            columnClasses[columns],
            gapClasses[gap],
            className
        )}>
            {children}
        </div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// SHOWCASE ITEM - Individual brand asset card
// ─────────────────────────────────────────────────────────────────────────────

interface ShowcaseItemProps {
    /** Image source */
    src: string;
    /** Alt text */
    alt: string;
    /** Caption text */
    caption?: string;
    /** Aspect ratio */
    aspect?: 'square' | '4:3' | '16:9' | '3:4';
    /** Background style */
    background?: 'light' | 'dark' | 'transparent';
    /** Animation delay */
    delay?: number;
    /** Additional CSS classes */
    className?: string;
}

export function ShowcaseItem({
    src,
    alt,
    caption,
    aspect = '4:3',
    background = 'light',
    delay = 0,
    className,
}: ShowcaseItemProps) {
    const aspectClasses = {
        'square': 'aspect-square',
        '4:3': 'aspect-[4/3]',
        '16:9': 'aspect-video',
        '3:4': 'aspect-[3/4]',
    };

    const backgroundClasses = {
        light: 'bg-marble',
        dark: 'bg-ink/10',
        transparent: 'bg-transparent',
    };

    return (
        <motion.div
            className={cn("group", className)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay, ease: easing.apple }}
        >
            {/* Image container */}
            <div className={cn(
                "relative overflow-hidden rounded-sm border border-ink/10",
                aspectClasses[aspect],
                backgroundClasses[background]
            )}>
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Caption */}
            {caption && (
                <div className="mt-3 pl-2 border-l-2 border-gold/30">
                    <Caption className="text-ink/60">{caption}</Caption>
                </div>
            )}
        </motion.div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// LOGO GRID - Specialized grid for logo variations
// ─────────────────────────────────────────────────────────────────────────────

interface LogoGridProps {
    /** Logo variants */
    logos: {
        src: string;
        alt: string;
        variant: string;
    }[];
    /** Additional CSS classes */
    className?: string;
}

export function LogoGrid({ logos, className }: LogoGridProps) {
    return (
        <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-4", className)}>
            {logos.map((logo, index) => (
                <motion.div
                    key={index}
                    className="group"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05, ease: easing.apple }}
                >
                    <div className="relative aspect-square bg-ink/5 rounded-sm border border-ink/10 overflow-hidden">
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            fill
                            className="object-contain p-6 transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                    <p className="mt-2 text-center font-cormorant-sc text-xs tracking-wider text-ink/50">
                        {logo.variant}
                    </p>
                </motion.div>
            ))}
        </div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// COLOR PALETTE DISPLAY - Brand colors showcase
// ─────────────────────────────────────────────────────────────────────────────

interface ColorPaletteProps {
    /** Array of color hex codes */
    colors: string[];
    /** Show hex codes */
    showCodes?: boolean;
    /** Additional CSS classes */
    className?: string;
}

export function ColorPalette({ colors, showCodes = true, className }: ColorPaletteProps) {
    return (
        <div className={cn("flex flex-wrap gap-4", className)}>
            {colors.map((color, index) => (
                <motion.div
                    key={index}
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05, ease: easing.apple }}
                >
                    <div
                        className="w-16 h-16 md:w-20 md:h-20 rounded-sm border border-ink/10 shadow-sm"
                        style={{ backgroundColor: color }}
                    />
                    {showCodes && (
                        <span className="mt-2 font-mono text-xs text-ink/50 uppercase">
                            {color}
                        </span>
                    )}
                </motion.div>
            ))}
        </div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// MOCKUP FRAME - Framed device mockup display
// ─────────────────────────────────────────────────────────────────────────────

interface MockupFrameProps {
    /** Image source */
    src: string;
    /** Alt text */
    alt: string;
    /** Caption text */
    caption?: string;
    /** Device type for aspect ratio */
    device?: 'desktop' | 'tablet' | 'mobile' | 'poster';
    /** Additional CSS classes */
    className?: string;
}

export function MockupFrame({
    src,
    alt,
    caption,
    device = 'desktop',
    className,
}: MockupFrameProps) {
    const deviceAspects = {
        desktop: 'aspect-video',
        tablet: 'aspect-[4/3]',
        mobile: 'aspect-[9/16]',
        poster: 'aspect-[2/3]',
    };

    return (
        <motion.div
            className={cn("group", className)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: easing.apple }}
        >
            {/* Frame */}
            <div className="p-3 md:p-4 bg-ink/5 rounded-sm border border-ink/10">
                <div className={cn(
                    "relative overflow-hidden rounded-sm bg-marble",
                    deviceAspects[device]
                )}>
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
            </div>

            {/* Caption */}
            {caption && (
                <div className="mt-4 text-center">
                    <Caption className="text-ink/60">{caption}</Caption>
                </div>
            )}
        </motion.div>
    );
}

export default BrandShowcase;
