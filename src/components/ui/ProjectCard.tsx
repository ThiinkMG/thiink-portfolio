"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { H3, Text, Label } from "@/components/ui/Typography";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
    title: string;
    category: string;
    image: string; // URL
    slug: string;
    className?: string;
    priority?: boolean;
}

export function ProjectCard({ title, category, image, slug, className, priority = false }: ProjectCardProps) {
    return (
        <Link href={`/work/${slug}`} className={cn("block group relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-sm bg-shark", className)}>
            {/* IMAGE CONTAINER */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <motion.div
                    className="w-full h-full bg-cover bg-center transition-all duration-500 ease-apple"
                    style={{ backgroundImage: `url(${image})` }}
                    initial={{ filter: "grayscale(100%)", scale: 1 }}
                    whileHover={{ filter: "grayscale(0%)", scale: 1.05 }}
                />
                {/* Dark Overlay for Text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
            </div>

            {/* CONTENT */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center justify-between mb-2">
                        <Label className="text-gold">{category}</Label>
                        <div className="w-8 h-8 rounded-full border border-ivory/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-obsidian/50 backdrop-blur">
                            <ArrowUpRight size={16} className="text-gold" />
                        </div>
                    </div>
                    <H3 className="mb-2 group-hover:text-gold transition-colors duration-300">{title}</H3>
                    <Text className="text-sm line-clamp-2 max-w-[90%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 transform translate-y-4 group-hover:translate-y-0">
                        Click to view case study.
                    </Text>
                </motion.div>
            </div>
        </Link>
    );
}
