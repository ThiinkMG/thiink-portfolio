"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { spring } from "@/lib/motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
    disabled?: boolean;
    /** Enable magnetic hover effect (default: true) */
    magnetic?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", isLoading, children, disabled, magnetic = true, ...props }, ref) => {
        // Magnetic Effect Logic - Snappy spring for responsive feel
        const x = useMotionValue(0);
        const y = useMotionValue(0);

        // Use snappy spring from motion.ts for crisp magnetic response
        const springConfig = spring.snappy;
        const xSpring = useSpring(x, springConfig);
        const ySpring = useSpring(y, springConfig);

        const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
            if (!magnetic) return;

            const { clientX, clientY } = e;
            const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
            const centerX = left + width / 2;
            const centerY = top + height / 2;

            // Move button by 25% of cursor distance from center
            // Capped to prevent excessive movement
            const maxDistance = 12;
            const deltaX = (clientX - centerX) * 0.25;
            const deltaY = (clientY - centerY) * 0.25;

            x.set(Math.max(-maxDistance, Math.min(maxDistance, deltaX)));
            y.set(Math.max(-maxDistance, Math.min(maxDistance, deltaY)));
        };

        const handleMouseLeave = () => {
            x.set(0);
            y.set(0);
        };

        // Styling Maps
        const variants = {
            primary: "bg-gold text-shark hover:bg-bronze shadow-none hover:shadow-[0_0_20px_rgba(212,168,85,0.3)]",
            secondary: "bg-transparent text-ivory border border-ivory/80 hover:border-gold hover:text-gold",
        };

        const sizes = {
            sm: "px-5 py-2.5 text-xs",
            md: "px-8 py-4 text-sm",
            lg: "px-10 py-5 text-sm",
        };

        return (
            <motion.button
                ref={ref}
                style={magnetic ? { x: xSpring, y: ySpring } : undefined}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", ...spring.snappy }}
                disabled={isLoading || disabled}
                className={cn( // Base Styles
                    "relative inline-flex items-center justify-center",
                    "font-outfit uppercase tracking-[0.08em] font-medium",
                    "transition-all duration-200 ease-apple cursor-pointer",
                    "focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-museum",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                ) : null}
                <span className="relative z-10">{children as React.ReactNode}</span>
            </motion.button>
        );
    }
);
Button.displayName = "Button";
