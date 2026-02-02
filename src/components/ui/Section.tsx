import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    fullWidth?: boolean;
    className?: string;
    children: React.ReactNode;
}

export function Section({ fullWidth = false, className, children, ...props }: SectionProps) {
    return (
        <section
            className={cn(
                "relative w-full",
                "py-12 md:py-20", // Vertical rhythm
                className
            )}
            {...props}
        >
            <div
                className={cn(
                    "mx-auto px-5 md:px-12 xl:px-20", // Horizontal padding
                    fullWidth ? "max-w-none" : "max-w-[1440px]",
                    "grid grid-cols-4 md:grid-cols-8 xl:grid-cols-12 gap-x-4 md:gap-x-6" // The Grid
                )}
            >
                {children}
            </div>
        </section>
    );
}
