"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode, ElementType } from "react";
import { easing, duration } from "@/lib/motion";
import { cn } from "@/lib/utils";

// ─────────────────────────────────────────────────────────────────────────────
// ANIMATION VARIANTS
// ─────────────────────────────────────────────────────────────────────────────

const variants: Record<string, Variants> = {
    fadeUp: {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: duration.slow, ease: easing.apple }
        },
    },
    fadeIn: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: duration.base, ease: easing.smooth }
        },
    },
    fadeLeft: {
        hidden: { opacity: 0, x: -40 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: duration.slow, ease: easing.apple }
        },
    },
    fadeRight: {
        hidden: { opacity: 0, x: 40 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: duration.slow, ease: easing.apple }
        },
    },
    scale: {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: duration.slow, ease: easing.apple }
        },
    },
};

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export interface ScrollRevealProps {
    children: ReactNode;
    /** Animation variant to use */
    variant?: keyof typeof variants;
    /** Delay before animation starts (in seconds) */
    delay?: number;
    /** Custom animation duration (in seconds) */
    animationDuration?: number;
    /** Whether to animate only once or every time element enters viewport */
    once?: boolean;
    /** Viewport margin for triggering animation */
    margin?: string;
    /** Additional CSS classes */
    className?: string;
}

export function ScrollReveal({
    children,
    variant = "fadeUp",
    delay = 0,
    animationDuration,
    once = true,
    margin = "-100px",
    className,
}: ScrollRevealProps) {
    const selectedVariant = variants[variant];

    // Add delay and custom duration to the visible state
    const customVariant: Variants = {
        hidden: selectedVariant.hidden,
        visible: {
            ...selectedVariant.visible,
            transition: {
                ...(typeof selectedVariant.visible === 'object' && 'transition' in selectedVariant.visible
                    ? selectedVariant.visible.transition
                    : {}),
                delay,
                ...(animationDuration && { duration: animationDuration }),
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin }}
            variants={customVariant}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// CONVENIENCE EXPORTS
// ─────────────────────────────────────────────────────────────────────────────

/** Fade up on scroll - most common reveal */
export function FadeUp({
    children,
    delay = 0,
    className,
    ...props
}: Omit<ScrollRevealProps, 'variant'>) {
    return (
        <ScrollReveal variant="fadeUp" delay={delay} className={className} {...props}>
            {children}
        </ScrollReveal>
    );
}

/** Fade in from left */
export function FadeLeft({
    children,
    delay = 0,
    className,
    ...props
}: Omit<ScrollRevealProps, 'variant'>) {
    return (
        <ScrollReveal variant="fadeLeft" delay={delay} className={className} {...props}>
            {children}
        </ScrollReveal>
    );
}

/** Fade in from right */
export function FadeRight({
    children,
    delay = 0,
    className,
    ...props
}: Omit<ScrollRevealProps, 'variant'>) {
    return (
        <ScrollReveal variant="fadeRight" delay={delay} className={className} {...props}>
            {children}
        </ScrollReveal>
    );
}

export default ScrollReveal;
