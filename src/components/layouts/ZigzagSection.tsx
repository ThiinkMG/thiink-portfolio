"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { easing, duration } from "@/lib/motion";
import { SectionLabel, H3, Text } from "@/components/ui/Typography";
import { CTALink } from "@/components/ui/TextLink";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// ZIGZAG SECTION
// Alternating image/text layout for services and features
// ─────────────────────────────────────────────────────────────────────────────

export interface ZigzagItemProps {
    /** Section label (small caps) */
    label?: string;
    /** Main title */
    title: string;
    /** Description text */
    description: string;
    /** Image source */
    image: string;
    /** Image alt text */
    imageAlt?: string;
    /** Optional CTA */
    cta?: {
        text: string;
        href: string;
    };
    /** Whether image is on the right (alternating) */
    imageRight?: boolean;
    /** Additional content below description */
    children?: ReactNode;
}

export function ZigzagItem({
    label,
    title,
    description,
    image,
    imageAlt,
    cta,
    imageRight = false,
    children,
}: ZigzagItemProps) {
    return (
        <motion.div
            className={cn(
                "grid gap-8 md:gap-12 lg:gap-16 items-center",
                "grid-cols-1 md:grid-cols-2"
            )}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: duration.slow, ease: easing.apple }}
        >
            {/* Text Content */}
            <div className={cn(
                "space-y-4 md:space-y-6",
                imageRight ? "md:order-1" : "md:order-2"
            )}>
                {label && (
                    <SectionLabel>{label}</SectionLabel>
                )}
                <H3 className="text-ivory">{title}</H3>
                <Text className="text-marble/80 max-w-lg">
                    {description}
                </Text>
                {children}
                {cta && (
                    <div className="pt-2">
                        <CTALink href={cta.href} variant="gold">
                            {cta.text}
                        </CTALink>
                    </div>
                )}
            </div>

            {/* Image */}
            <motion.div
                className={cn(
                    "relative aspect-[4/3] overflow-hidden",
                    "bg-slate border border-platinum/10",
                    imageRight ? "md:order-2" : "md:order-1"
                )}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: duration.fast, ease: easing.apple }}
            >
                <Image
                    src={image}
                    alt={imageAlt || title}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gold border on hover */}
                <div className="absolute inset-0 ring-2 ring-inset ring-gold/0 hover:ring-gold/30 transition-all duration-300" />
            </motion.div>
        </motion.div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// ZIGZAG CONTAINER
// ─────────────────────────────────────────────────────────────────────────────

interface ZigzagSectionProps {
    children: ReactNode;
    /** Gap between items */
    gap?: 'md' | 'lg' | 'xl';
    /** Additional CSS classes */
    className?: string;
}

export function ZigzagSection({
    children,
    gap = 'lg',
    className,
}: ZigzagSectionProps) {
    const gapClasses = {
        md: 'space-y-16 md:space-y-20',
        lg: 'space-y-20 md:space-y-28',
        xl: 'space-y-24 md:space-y-32',
    };

    return (
        <div className={cn(gapClasses[gap], className)}>
            {children}
        </div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// SERVICE CARD (Bento variant)
// For services grid within zigzag sections
// ─────────────────────────────────────────────────────────────────────────────

interface ServiceCardProps {
    /** Icon or number */
    icon?: ReactNode;
    /** Service title */
    title: string;
    /** Brief description */
    description: string;
    /** Extended description shown when expanded */
    expandedDescription?: string;
    /** Optional link */
    href?: string;
    /** CTA link for Learn More button */
    ctaHref?: string;
    /** CTA text */
    ctaText?: string;
    /** Card size */
    size?: 'sm' | 'md' | 'lg';
    /** Additional CSS classes */
    className?: string;
    /** Controlled: whether card is expanded */
    isExpanded?: boolean;
    /** Controlled: callback when card is toggled */
    onToggle?: () => void;
}

export function ServiceCard({
    icon,
    title,
    description,
    expandedDescription,
    href,
    ctaHref = "https://www.thiinkmediagraphics.com/new-project-form",
    ctaText = "Start Project",
    size = 'md',
    className,
    isExpanded: controlledExpanded,
    onToggle,
}: ServiceCardProps) {
    // Support both controlled and uncontrolled modes
    const [internalExpanded, setInternalExpanded] = useState(false);
    const isExpanded = controlledExpanded !== undefined ? controlledExpanded : internalExpanded;

    const handleToggle = () => {
        if (onToggle) {
            onToggle();
        } else {
            setInternalExpanded(!internalExpanded);
        }
    };

    const sizeClasses = {
        sm: 'p-4 md:p-5',
        md: 'p-5 md:p-6',
        lg: 'p-6 md:p-8',
    };

    const content = (
        <motion.div
            className={cn(
                "group relative overflow-hidden cursor-pointer",
                "bg-slate/50 border border-platinum/10",
                isExpanded ? "border-gold/40 bg-slate/90" : "hover:border-gold/30 hover:bg-slate/80",
                "transition-all duration-300",
                sizeClasses[size],
                className
            )}
            onClick={handleToggle}
            whileHover={{ y: isExpanded ? 0 : -4 }}
            transition={{ duration: duration.fast, ease: easing.apple }}
            layout
        >
            {/* Texture overlay */}
            <div className={cn(
                "absolute inset-0 transition-opacity duration-300",
                isExpanded ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            )}>
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
            </div>

            <div className="relative space-y-3">
                <div className="flex items-start justify-between">
                    {icon && (
                        <div className="text-gold/80 text-2xl">
                            {icon}
                        </div>
                    )}
                    <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-gold/50"
                    >
                        <ChevronDown size={18} />
                    </motion.div>
                </div>
                <h4 className={cn(
                    "font-cinzel font-medium transition-colors",
                    isExpanded ? "text-gold" : "text-ivory group-hover:text-gold"
                )}>
                    {title}
                </h4>
                <p className="font-garamond text-sm text-platinum/70 leading-relaxed">
                    {description}
                </p>

                {/* Expandable content */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: easing.apple }}
                            className="overflow-hidden"
                        >
                            {expandedDescription && (
                                <p className="font-garamond text-sm text-marble/60 leading-relaxed pt-2 border-t border-platinum/10 mt-3">
                                    {expandedDescription}
                                </p>
                            )}
                            <a
                                href={ctaHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-gold text-obsidian font-outfit text-xs uppercase tracking-wider hover:bg-bronze transition-colors duration-200"
                            >
                                {ctaText}
                                <ArrowRight size={14} />
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Gold glow on hover */}
            <div className={cn(
                "absolute inset-0 transition-opacity duration-500 pointer-events-none",
                isExpanded ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            )}>
                <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(212,168,85,0.1)]" />
            </div>
        </motion.div>
    );

    if (href && !isExpanded) {
        return (
            <a href={href} className="block">
                {content}
            </a>
        );
    }

    return content;
}

// ─────────────────────────────────────────────────────────────────────────────
// BENTO GRID
// For service cards layout
// ─────────────────────────────────────────────────────────────────────────────

interface BentoGridProps {
    children: ReactNode;
    /** Grid columns */
    columns?: 2 | 3 | 4;
    /** Gap size */
    gap?: 'sm' | 'md' | 'lg';
    /** Additional CSS classes */
    className?: string;
}

export function BentoGrid({
    children,
    columns = 2,
    gap = 'md',
    className,
}: BentoGridProps) {
    const columnClasses = {
        2: 'grid-cols-1 sm:grid-cols-2',
        3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    };

    const gapClasses = {
        sm: 'gap-3',
        md: 'gap-4 md:gap-5',
        lg: 'gap-5 md:gap-6',
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

export default ZigzagSection;
