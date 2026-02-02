"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { easing, duration } from "@/lib/motion";
import { ReactNode } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// TWO COLUMN TEXT
// Editorial layout for case studies and long-form content
// ─────────────────────────────────────────────────────────────────────────────

interface TwoColumnTextProps {
    /** Left column content (typically narrower) */
    left: ReactNode;
    /** Right column content (typically wider) */
    right: ReactNode;
    /** Column ratio */
    ratio?: '1:1' | '1:2' | '2:1' | '1:3' | '3:1';
    /** Gap size */
    gap?: 'md' | 'lg' | 'xl';
    /** Vertical alignment */
    align?: 'top' | 'center' | 'bottom';
    /** Reverse on mobile */
    mobileReverse?: boolean;
    /** Additional CSS classes */
    className?: string;
}

export function TwoColumnText({
    left,
    right,
    ratio = '1:2',
    gap = 'lg',
    align = 'top',
    mobileReverse = false,
    className,
}: TwoColumnTextProps) {
    const ratioClasses = {
        '1:1': 'md:grid-cols-2',
        '1:2': 'md:grid-cols-[1fr_2fr]',
        '2:1': 'md:grid-cols-[2fr_1fr]',
        '1:3': 'md:grid-cols-[1fr_3fr]',
        '3:1': 'md:grid-cols-[3fr_1fr]',
    };

    const gapClasses = {
        md: 'gap-8 md:gap-12',
        lg: 'gap-10 md:gap-16',
        xl: 'gap-12 md:gap-20',
    };

    const alignClasses = {
        top: 'items-start',
        center: 'items-center',
        bottom: 'items-end',
    };

    return (
        <div className={cn(
            "grid grid-cols-1",
            ratioClasses[ratio],
            gapClasses[gap],
            alignClasses[align],
            className
        )}>
            <motion.div
                className={mobileReverse ? 'order-2 md:order-1' : ''}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: duration.slow, ease: easing.apple }}
            >
                {left}
            </motion.div>
            <motion.div
                className={mobileReverse ? 'order-1 md:order-2' : ''}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: duration.slow, ease: easing.apple, delay: 0.1 }}
            >
                {right}
            </motion.div>
        </div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// SIDEBAR LAYOUT
// Content with sidebar (metadata, navigation, etc.)
// ─────────────────────────────────────────────────────────────────────────────

interface SidebarLayoutProps {
    /** Main content */
    children: ReactNode;
    /** Sidebar content */
    sidebar: ReactNode;
    /** Sidebar position */
    sidebarPosition?: 'left' | 'right';
    /** Sticky sidebar */
    stickybar?: boolean;
    /** Gap size */
    gap?: 'md' | 'lg' | 'xl';
    /** Additional CSS classes */
    className?: string;
}

export function SidebarLayout({
    children,
    sidebar,
    sidebarPosition = 'left',
    stickybar = true,
    gap = 'lg',
    className,
}: SidebarLayoutProps) {
    const gapClasses = {
        md: 'gap-8 md:gap-12',
        lg: 'gap-10 md:gap-16',
        xl: 'gap-12 md:gap-20',
    };

    return (
        <div className={cn(
            "grid grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr]",
            gapClasses[gap],
            className
        )}>
            {/* Sidebar */}
            <aside className={cn(
                sidebarPosition === 'right' ? 'md:order-2' : 'md:order-1',
                stickybar && 'md:sticky md:top-24 md:self-start'
            )}>
                {sidebar}
            </aside>

            {/* Main content */}
            <main className={sidebarPosition === 'right' ? 'md:order-1' : 'md:order-2'}>
                {children}
            </main>
        </div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// EDITORIAL COLUMN
// Single column with max-width for readability
// ─────────────────────────────────────────────────────────────────────────────

interface EditorialColumnProps {
    children: ReactNode;
    /** Max width */
    width?: 'narrow' | 'medium' | 'wide';
    /** Text alignment */
    align?: 'left' | 'center';
    /** Additional CSS classes */
    className?: string;
}

export function EditorialColumn({
    children,
    width = 'medium',
    align = 'left',
    className,
}: EditorialColumnProps) {
    const widthClasses = {
        narrow: 'max-w-xl',
        medium: 'max-w-2xl',
        wide: 'max-w-3xl',
    };

    const alignClasses = {
        left: '',
        center: 'mx-auto text-center',
    };

    return (
        <div className={cn(
            widthClasses[width],
            alignClasses[align],
            className
        )}>
            {children}
        </div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// MARGINALIA
// Side notes for case studies (curator's notes)
// ─────────────────────────────────────────────────────────────────────────────

interface MarginaliaProps {
    children: ReactNode;
    /** Position relative to main content */
    position?: 'left' | 'right';
    /** Additional CSS classes */
    className?: string;
}

export function Marginalia({
    children,
    position = 'left',
    className,
}: MarginaliaProps) {
    return (
        <aside className={cn(
            "hidden lg:block",
            "text-sm text-ink/70 italic",
            "font-garamond leading-relaxed",
            position === 'left' ? 'text-right pr-8' : 'text-left pl-8',
            className
        )}>
            {children}
        </aside>
    );
}

export default TwoColumnText;
