import { cn } from "@/lib/utils";
import React from "react";

// ─────────────────────────────────────────────────────────────────────────────
// DISPLAY TYPOGRAPHY - Cinzel (Roman carved aesthetic)
// ─────────────────────────────────────────────────────────────────────────────

// H1: Hero Headline - Maximum impact
export function H1({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h1
            className={cn(
                "font-cinzel font-semibold tracking-tight leading-[1.1] text-ivory",
                "text-[clamp(2.5rem,5vw+1rem,5rem)]", // 40px → 80px
                className
            )}
            {...props}
        >
            {children}
        </h1>
    );
}

// H2: Section Headers
export function H2({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h2
            className={cn(
                "font-cinzel font-medium tracking-tight text-ivory",
                "text-[clamp(2rem,3vw+0.75rem,3.5rem)]", // 32px → 56px
                className
            )}
            {...props}
        >
            {children}
        </h2>
    );
}

// H3: Card Headers / Subsections
export function H3({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h3
            className={cn(
                "font-cinzel font-medium text-ivory",
                "text-[clamp(1.5rem,2vw+0.5rem,2.25rem)]", // 24px → 36px
                className
            )}
            {...props}
        >
            {children}
        </h3>
    );
}

// H4: Smaller headings
export function H4({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h4
            className={cn(
                "font-cinzel font-medium text-ivory",
                "text-[clamp(1.25rem,1.5vw+0.5rem,1.75rem)]", // 20px → 28px
                className
            )}
            {...props}
        >
            {children}
        </h4>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// BODY TYPOGRAPHY - EB Garamond (Academic, highly legible)
// ─────────────────────────────────────────────────────────────────────────────

// Body Text - Standard paragraphs
export function Text({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p
            className={cn(
                "font-garamond leading-[1.7] text-marble/90",
                "text-[clamp(1rem,0.25vw+0.9rem,1.125rem)]", // 16px → 18px
                className
            )}
            {...props}
        >
            {children}
        </p>
    );
}

// Lead Text - Introductory paragraphs
export function Lead({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p
            className={cn(
                "font-garamond leading-[1.6] text-marble",
                "text-[clamp(1.125rem,0.5vw+1rem,1.25rem)]", // 18px → 20px
                className
            )}
            {...props}
        >
            {children}
        </p>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// UI TYPOGRAPHY - Cormorant SC & Outfit
// ─────────────────────────────────────────────────────────────────────────────

// Section Label - Small caps museum aesthetic (Cormorant SC)
export function SectionLabel({ className, children, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
    return (
        <span
            className={cn(
                "font-cormorant-sc text-sm tracking-[0.2em] uppercase text-gold/80",
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
}

// UI Label - Modern contrast (Outfit)
export function Label({ className, children, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
    return (
        <span
            className={cn(
                "font-outfit text-sm uppercase tracking-[0.08em] text-platinum",
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
}

// Caption - Metadata, dates, figure captions (Cormorant SC)
export function Caption({ className, children, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
    return (
        <span
            className={cn(
                "font-cormorant-sc text-xs tracking-[0.15em] uppercase text-platinum/70",
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// SPECIAL TYPOGRAPHY - Museum-specific components
// ─────────────────────────────────────────────────────────────────────────────

// Doubled Headline - Shadow offset effect for case studies
interface DoubledHeadlineProps extends React.HTMLAttributes<HTMLHeadingElement> {
    as?: 'h1' | 'h2' | 'h3';
}

export function DoubledHeadline({
    as: Component = 'h2',
    className,
    children,
    ...props
}: DoubledHeadlineProps) {
    const text = typeof children === 'string' ? children : '';

    return (
        <Component
            className={cn(
                "font-cinzel font-semibold tracking-tight text-ivory relative",
                "text-[clamp(2rem,3vw+0.75rem,3.5rem)]",
                className
            )}
            data-text={text}
            {...props}
        >
            {/* Shadow layer */}
            <span
                className="absolute -top-0.5 -left-0.5 text-gold/10 select-none pointer-events-none"
                aria-hidden="true"
            >
                {children}
            </span>
            {/* Primary layer */}
            <span className="relative">{children}</span>
        </Component>
    );
}

// Drop Cap - First letter of paragraphs in case studies
export function DropCap({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p
            className={cn(
                "font-garamond leading-[1.7] text-marble/90",
                "text-[clamp(1rem,0.25vw+0.9rem,1.125rem)]",
                // Drop cap styling via first-letter pseudo-element
                "first-letter:font-cinzel first-letter:text-6xl first-letter:font-semibold",
                "first-letter:text-gold first-letter:float-left first-letter:mr-3",
                "first-letter:leading-[0.8] first-letter:mt-1",
                className
            )}
            {...props}
        >
            {children}
        </p>
    );
}

// Placard Text - Museum-style figure captions
interface PlacardProps extends React.HTMLAttributes<HTMLDivElement> {
    figureNumber?: number;
    title: string;
    subtitle?: string;
}

export function Placard({ figureNumber, title, subtitle, className, ...props }: PlacardProps) {
    return (
        <div className={cn("space-y-1", className)} {...props}>
            {figureNumber && (
                <Caption>Fig. {figureNumber}.</Caption>
            )}
            <p className="font-cinzel text-sm font-medium text-ivory tracking-wide">
                {title}
            </p>
            {subtitle && (
                <p className="font-garamond text-xs text-platinum/70 italic">
                    {subtitle}
                </p>
            )}
        </div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// PARCHMENT MODE TYPOGRAPHY - For case studies (light backgrounds)
// ─────────────────────────────────────────────────────────────────────────────

// Parchment variants use ink color instead of marble
export function ParchmentText({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p
            className={cn(
                "font-garamond leading-[1.7] text-ink/90",
                "text-[clamp(1rem,0.25vw+0.9rem,1.125rem)]",
                className
            )}
            {...props}
        >
            {children}
        </p>
    );
}

export function ParchmentHeading({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h2
            className={cn(
                "font-cinzel font-medium tracking-tight text-ink",
                "text-[clamp(2rem,3vw+0.75rem,3.5rem)]",
                className
            )}
            {...props}
        >
            {children}
        </h2>
    );
}
