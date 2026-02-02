"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";
import { easing, duration } from "@/lib/motion";
import { cn } from "@/lib/utils";

// ─────────────────────────────────────────────────────────────────────────────
// STAGGER CONTAINER
// ─────────────────────────────────────────────────────────────────────────────

export interface StaggerContainerProps {
    children: ReactNode;
    /** Delay between each child animation */
    staggerDelay?: number;
    /** Delay before the first child starts animating */
    initialDelay?: number;
    /** Whether to animate only once */
    once?: boolean;
    /** Viewport margin for triggering animation */
    margin?: string;
    /** Additional CSS classes */
    className?: string;
}

export function StaggerContainer({
    children,
    staggerDelay = 0.08,
    initialDelay = 0,
    once = true,
    margin = "-100px",
    className,
}: StaggerContainerProps) {
    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: initialDelay,
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin }}
            variants={containerVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// STAGGER ITEM
// ─────────────────────────────────────────────────────────────────────────────

export interface StaggerItemProps {
    children: ReactNode;
    /** Animation variant */
    variant?: 'fadeUp' | 'fadeIn' | 'fadeLeft' | 'fadeRight' | 'scale';
    /** Additional CSS classes */
    className?: string;
}

const itemVariants: Record<string, Variants> = {
    fadeUp: {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: duration.slow, ease: easing.apple },
        },
    },
    fadeIn: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: duration.base, ease: easing.smooth },
        },
    },
    fadeLeft: {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: duration.slow, ease: easing.apple },
        },
    },
    fadeRight: {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: duration.slow, ease: easing.apple },
        },
    },
    scale: {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: duration.slow, ease: easing.apple },
        },
    },
};

export function StaggerItem({
    children,
    variant = 'fadeUp',
    className,
}: StaggerItemProps) {
    return (
        <motion.div
            variants={itemVariants[variant]}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// TEXT STAGGER - Character by character or word by word
// ─────────────────────────────────────────────────────────────────────────────

interface StaggerTextProps {
    children: string;
    /** Animate by 'word' or 'character' */
    by?: 'word' | 'character';
    /** Delay between each element */
    staggerDelay?: number;
    /** Initial delay before animation starts */
    initialDelay?: number;
    /** Whether to animate only once */
    once?: boolean;
    /** Additional CSS classes for the container */
    className?: string;
    /** Additional CSS classes for each element */
    itemClassName?: string;
}

export function StaggerText({
    children,
    by = 'word',
    staggerDelay = 0.05,
    initialDelay = 0,
    once = true,
    className,
    itemClassName,
}: StaggerTextProps) {
    const elements = by === 'word'
        ? children.split(' ')
        : children.split('');

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: initialDelay,
            },
        },
    };

    const itemVariant: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: duration.base, ease: easing.apple },
        },
    };

    return (
        <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: '-50px' }}
            variants={containerVariants}
            className={cn("inline-flex flex-wrap", className)}
        >
            {elements.map((element, index) => (
                <motion.span
                    key={index}
                    variants={itemVariant}
                    className={cn(
                        "inline-block",
                        by === 'word' && index < elements.length - 1 && "mr-[0.25em]",
                        itemClassName
                    )}
                >
                    {element}
                </motion.span>
            ))}
        </motion.span>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// CONVENIENCE PRESETS
// ─────────────────────────────────────────────────────────────────────────────

/** Fast stagger for lists */
export function FastStagger({ children, className, ...props }: Omit<StaggerContainerProps, 'staggerDelay'>) {
    return (
        <StaggerContainer staggerDelay={0.05} className={className} {...props}>
            {children}
        </StaggerContainer>
    );
}

/** Slow stagger for hero elements */
export function SlowStagger({ children, className, ...props }: Omit<StaggerContainerProps, 'staggerDelay'>) {
    return (
        <StaggerContainer staggerDelay={0.12} className={className} {...props}>
            {children}
        </StaggerContainer>
    );
}

/** Dramatic stagger for reveal moments */
export function DramaticStagger({ children, className, ...props }: Omit<StaggerContainerProps, 'staggerDelay'>) {
    return (
        <StaggerContainer staggerDelay={0.2} className={className} {...props}>
            {children}
        </StaggerContainer>
    );
}

export default StaggerContainer;
