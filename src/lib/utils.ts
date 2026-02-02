import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Format date in European style (DD.MM.YYYY)
 * Used for museum-style figure captions and metadata
 */
export function formatDateEuropean(date: string | Date): string {
    const d = new Date(date);
    return d.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    }).replace(/\//g, '.');
}

/**
 * Format year only (YYYY)
 */
export function formatYear(date: string | Date): string {
    return new Date(date).getFullYear().toString();
}
