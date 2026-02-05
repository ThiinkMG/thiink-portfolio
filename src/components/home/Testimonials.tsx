"use client";

import * as React from "react";
import { H2, SectionLabel, Text } from "@/components/ui/Typography";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

// ─────────────────────────────────────────────────────────────────────────────
// TESTIMONIALS - "Voices of Our Patrons"
// Rotating spotlight with client quotes
// ─────────────────────────────────────────────────────────────────────────────

interface TestimonialData {
    quote: string;
    author: string;
    title: string;
    project: string;
}

interface TestimonialsProps {
    sectionLabel?: string;
    sectionTitle?: string;
    testimonials?: TestimonialData[];
}

// Default testimonials for fallback
const DEFAULT_TESTIMONIALS: TestimonialData[] = [
    {
        quote: "Thiink Media Graphics is an amazing graphic design company that produces exceptional work with friendly and fast service.",
        author: "Alexander Sofronas",
        title: "Host, Ai x Automation Podcast",
        project: "Podcast Branding",
    },
    {
        quote: "We often use Thiink Media Graphics to create graphics from posters, to logos, to promo videos and more!",
        author: "One Dream Sports",
        title: "Sports & Talent Agency",
        project: "Marketing Materials",
    },
    {
        quote: "Super fast, super friendly, super professional.",
        author: "Dionta Goodson",
        title: "Author, Later You'll Understand",
        project: "Book Design",
    },
    {
        quote: "Mustapha was very knowledgeable when it came to helping me select a logo for my podcast! He asked all the right questions and was able to spark my imagination and bring an idea to life!",
        author: "Krissy T",
        title: "Podcast Creator",
        project: "Logo Design",
    },
    {
        quote: "Great work in a timely fashion. That's asking a lot from many design firms. They got it right.",
        author: "Nathan Fitzpatrick",
        title: "Business Owner",
        project: "Design Services",
    },
    {
        quote: "My designs were created perfectly and designed exactly how I wanted them. Which has been a big push in the start of my clothing brand.",
        author: "Redd Baby",
        title: "Clothing Brand Founder",
        project: "Brand Design",
    },
];

export function Testimonials({
    sectionLabel = "Client Stories",
    sectionTitle = "Voices of Our Patrons",
    testimonials = DEFAULT_TESTIMONIALS,
}: TestimonialsProps) {
    const [current, setCurrent] = React.useState(0);
    const [direction, setDirection] = React.useState(0);

    const next = React.useCallback(() => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % testimonials.length);
    }, [testimonials.length]);

    const prev = () => {
        setDirection(-1);
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Auto-advance every 8 seconds
    React.useEffect(() => {
        const timer = setInterval(next, 8000);
        return () => clearInterval(timer);
    }, [next]);

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 100 : -100,
            opacity: 0,
        }),
    };

    const testimonial = testimonials[current];

    if (!testimonial) return null;

    return (
        <section className="py-24 md:py-32 bg-museum">
            <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20">
                {/* ─── SECTION HEADER ─── */}
                <ScrollReveal className="text-center mb-16 md:mb-20">
                    <SectionLabel className="mb-4 block">{sectionLabel}</SectionLabel>
                    <H2 className="mb-6">{sectionTitle}</H2>
                </ScrollReveal>

                {/* ─── TESTIMONIAL CARD ─── */}
                <div className="relative">
                    {/* Quote Icon */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                        <Quote className="w-12 h-12 text-gold/30" />
                    </div>

                    {/* Main Card */}
                    <div className="bg-slate/30 border border-gold/10 rounded-sm p-8 md:p-12 lg:p-16 min-h-[300px] flex flex-col items-center justify-center">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={current}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="text-center"
                            >
                                {/* Stars */}
                                <div className="flex justify-center gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-4 h-4 text-gold fill-gold"
                                        />
                                    ))}
                                </div>

                                {/* Quote */}
                                <blockquote className="font-garamond text-xl md:text-2xl lg:text-3xl text-marble/90 leading-relaxed mb-8 max-w-3xl mx-auto italic">
                                    "{testimonial.quote}"
                                </blockquote>

                                {/* Attribution */}
                                <div className="space-y-1">
                                    <p className="font-cinzel text-gold text-lg">
                                        {testimonial.author}
                                    </p>
                                    <p className="font-cormorant-sc text-xs uppercase tracking-widest text-marble/50">
                                        {testimonial.title} • {testimonial.project}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <button
                            onClick={prev}
                            className="p-2 border border-gold/30 rounded-full text-gold/50 hover:text-gold hover:border-gold transition-colors duration-200"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setDirection(index > current ? 1 : -1);
                                        setCurrent(index);
                                    }}
                                    className={cn(
                                        "w-2 h-2 rounded-full transition-all duration-300",
                                        index === current
                                            ? "bg-gold w-6"
                                            : "bg-gold/30 hover:bg-gold/50"
                                    )}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            className="p-2 border border-gold/30 rounded-full text-gold/50 hover:text-gold hover:border-gold transition-colors duration-200"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
