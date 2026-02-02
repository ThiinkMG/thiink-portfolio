"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import { easing, duration } from "@/lib/motion";
import { ArrowRight, ExternalLink } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// TEXT LINK
// Elegant serif CTA with animated underline
// ─────────────────────────────────────────────────────────────────────────────

interface TextLinkProps {
    /** Link destination */
    href: string;
    /** Link text */
    children: React.ReactNode;
    /** Visual variant */
    variant?: 'default' | 'gold' | 'subtle';
    /** Size variant */
    size?: 'sm' | 'md' | 'lg';
    /** Show arrow icon */
    showArrow?: boolean;
    /** External link (opens in new tab) */
    external?: boolean;
    /** Additional CSS classes */
    className?: string;
}

export function TextLink({
    href,
    children,
    variant = 'default',
    size = 'md',
    showArrow = false,
    external = false,
    className,
}: TextLinkProps) {
    const variantClasses = {
        default: 'text-ivory hover:text-gold',
        gold: 'text-gold hover:text-bronze',
        subtle: 'text-platinum hover:text-marble',
    };

    const sizeClasses = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
    };

    const iconSizes = {
        sm: 'w-3.5 h-3.5',
        md: 'w-4 h-4',
        lg: 'w-5 h-5',
    };

    const linkProps = external ? {
        target: '_blank',
        rel: 'noopener noreferrer',
    } : {};

    const Icon = external ? ExternalLink : ArrowRight;

    return (
        <Link
            href={href}
            className={cn(
                "group inline-flex items-center gap-2",
                "font-garamond italic",
                "transition-colors duration-200",
                variantClasses[variant],
                sizeClasses[size],
                className
            )}
            {...linkProps}
        >
            {/* Text with animated underline */}
            <span className="relative">
                {children}
                {/* Underline that grows from center */}
                <span className={cn(
                    "absolute bottom-0 left-1/2 -translate-x-1/2",
                    "h-px w-0 group-hover:w-full",
                    "bg-current",
                    "transition-all duration-300 ease-out"
                )} />
            </span>

            {/* Arrow/External icon */}
            {showArrow && (
                <motion.span
                    className="inline-flex"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: duration.fast, ease: easing.apple }}
                >
                    <Icon className={cn(iconSizes[size], "transition-transform")} />
                </motion.span>
            )}
        </Link>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// CTA LINK
// Bold call-to-action link with Outfit font
// ─────────────────────────────────────────────────────────────────────────────

interface CTALinkProps {
    /** Link destination */
    href: string;
    /** Link text */
    children: React.ReactNode;
    /** Visual variant */
    variant?: 'gold' | 'white' | 'subtle';
    /** Size variant */
    size?: 'sm' | 'md' | 'lg';
    /** External link */
    external?: boolean;
    /** Additional CSS classes */
    className?: string;
}

export function CTALink({
    href,
    children,
    variant = 'gold',
    size = 'md',
    external = false,
    className,
}: CTALinkProps) {
    const variantClasses = {
        gold: 'text-gold hover:text-bronze',
        white: 'text-ivory hover:text-gold',
        subtle: 'text-platinum hover:text-ivory',
    };

    const sizeClasses = {
        sm: 'text-xs tracking-[0.1em]',
        md: 'text-sm tracking-[0.08em]',
        lg: 'text-base tracking-[0.08em]',
    };

    const linkProps = external ? {
        target: '_blank',
        rel: 'noopener noreferrer',
    } : {};

    return (
        <Link
            href={href}
            className={cn(
                "group inline-flex items-center gap-2",
                "font-outfit font-medium uppercase",
                "transition-colors duration-200",
                variantClasses[variant],
                sizeClasses[size],
                className
            )}
            {...linkProps}
        >
            <span>{children}</span>
            <motion.span
                className="inline-flex"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: duration.fast, ease: easing.apple }}
            >
                {external ? (
                    <ExternalLink className="w-4 h-4" />
                ) : (
                    <ArrowRight className="w-4 h-4" />
                )}
            </motion.span>
        </Link>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// INLINE LINK
// For links within body text
// ─────────────────────────────────────────────────────────────────────────────

interface InlineLinkProps {
    href: string;
    children: React.ReactNode;
    external?: boolean;
    className?: string;
}

export function InlineLink({
    href,
    children,
    external = false,
    className,
}: InlineLinkProps) {
    const linkProps = external ? {
        target: '_blank',
        rel: 'noopener noreferrer',
    } : {};

    return (
        <Link
            href={href}
            className={cn(
                "text-gold hover:text-bronze",
                "underline decoration-gold/40 hover:decoration-gold",
                "underline-offset-2",
                "transition-colors duration-200",
                className
            )}
            {...linkProps}
        >
            {children}
        </Link>
    );
}

export default TextLink;
