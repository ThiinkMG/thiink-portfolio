"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { easing, duration } from "@/lib/motion";
import Image from "next/image";

// ─────────────────────────────────────────────────────────────────────────────
// SECTION DIVIDER
// Museum-style decorative dividers between sections
// Uses the Thiink MG brand monogram (orbital/atom symbol)
// ─────────────────────────────────────────────────────────────────────────────

interface SectionDividerProps {
    /** Variant style */
    variant?: 'atom' | 'line' | 'ornament' | 'dots';
    /** Color scheme */
    color?: 'gold' | 'platinum' | 'marble';
    /** Size of the divider */
    size?: 'sm' | 'md' | 'lg';
    /** Whether to animate on scroll */
    animate?: boolean;
    /** Additional CSS classes */
    className?: string;
}

export function SectionDivider({
    variant = 'atom',
    color = 'gold',
    size = 'md',
    animate = true,
    className,
}: SectionDividerProps) {
    const lineColorClasses = {
        gold: 'from-transparent via-gold/40 to-transparent',
        platinum: 'from-transparent via-platinum/30 to-transparent',
        marble: 'from-transparent via-marble/20 to-transparent',
    };

    const sizeClasses = {
        sm: 'py-8',
        md: 'py-12',
        lg: 'py-16',
    };

    // Icon sizes for the brand monogram image
    const iconSizes = {
        sm: { width: 24, height: 24 },
        md: { width: 32, height: 32 },
        lg: { width: 40, height: 40 },
    };

    const lineWidths = {
        sm: 'w-20 md:w-32',
        md: 'w-32 md:w-48',
        lg: 'w-40 md:w-64',
    };

    // Select the correct monogram based on color
    const monogramSrc = color === 'gold'
        ? '/_design_references/Design Assets/Thiink MG Brand Assets/Logos/Monogram Logo - Gold.png'
        : '/_design_references/Design Assets/Thiink MG Brand Assets/Logos/Monogram Logo - White.png';

    const Container = animate ? motion.div : 'div';
    const animationProps = animate ? {
        initial: { opacity: 0, scale: 0.8 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true, margin: '-50px' },
        transition: { duration: duration.slow, ease: easing.apple },
    } : {};

    return (
        <Container
            className={cn(
                "flex items-center justify-center gap-4",
                sizeClasses[size],
                className
            )}
            {...animationProps}
        >
            {/* Left line */}
            <div
                className={cn(
                    "h-px bg-gradient-to-r",
                    lineColorClasses[color],
                    lineWidths[size]
                )}
            />

            {/* Center element - Brand Monogram */}
            {(variant === 'atom' || variant === 'ornament') && (
                <div className="relative flex-shrink-0">
                    <Image
                        src={monogramSrc}
                        alt="Thiink MG"
                        width={iconSizes[size].width}
                        height={iconSizes[size].height}
                        className={cn(
                            "object-contain",
                            color === 'platinum' && "opacity-60",
                            color === 'marble' && "opacity-40"
                        )}
                    />
                </div>
            )}

            {variant === 'line' && (
                <div className={cn(
                    "w-2 h-2 rounded-full",
                    color === 'gold' && "bg-gold",
                    color === 'platinum' && "bg-platinum",
                    color === 'marble' && "bg-marble"
                )} />
            )}

            {variant === 'dots' && (
                <div className="flex gap-1.5">
                    <div className={cn(
                        "w-1.5 h-1.5 rounded-full opacity-40",
                        color === 'gold' && "bg-gold",
                        color === 'platinum' && "bg-platinum",
                        color === 'marble' && "bg-marble"
                    )} />
                    <div className={cn(
                        "w-1.5 h-1.5 rounded-full",
                        color === 'gold' && "bg-gold",
                        color === 'platinum' && "bg-platinum",
                        color === 'marble' && "bg-marble"
                    )} />
                    <div className={cn(
                        "w-1.5 h-1.5 rounded-full opacity-40",
                        color === 'gold' && "bg-gold",
                        color === 'platinum' && "bg-platinum",
                        color === 'marble' && "bg-marble"
                    )} />
                </div>
            )}

            {/* Right line */}
            <div
                className={cn(
                    "h-px bg-gradient-to-r",
                    lineColorClasses[color],
                    lineWidths[size]
                )}
            />
        </Container>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// CONVENIENCE EXPORTS
// ─────────────────────────────────────────────────────────────────────────────

/** Gold atom divider - default style */
export function AtomDivider({ className, ...props }: Omit<SectionDividerProps, 'variant'>) {
    return <SectionDivider variant="atom" className={className} {...props} />;
}

/** Simple line divider */
export function LineDivider({ className, ...props }: Omit<SectionDividerProps, 'variant'>) {
    return <SectionDivider variant="line" className={className} {...props} />;
}

/** Ornamental divider */
export function OrnamentDivider({ className, ...props }: Omit<SectionDividerProps, 'variant'>) {
    return <SectionDivider variant="ornament" className={className} {...props} />;
}

export default SectionDivider;
