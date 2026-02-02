import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

// Mock Logos (Text for now, can be replaced with SVGs)
const LOGOS = [
    "GOOGLE", "DISNEY", "HULU", "WIX", "PRINTFUL", "MOO", "STARZ", "BBB"
];

export function TrustMarquee() {
    return (
        <div className="w-full bg-shark py-12 border-y border-ivory/5 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-5 mb-6">
                <p className="font-outfit text-xs text-center uppercase tracking-[0.2em] text-platinum/40">
                    Trusted by Industry Leaders
                </p>
            </div>

            {/* MARQUEE CONTAINER */}
            <div className="relative flex overflow-hidden group">
                <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
                    {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
                        <div key={i} className="mx-8 md:mx-16 flex items-center justify-center opacity-30 hover:opacity-80 transition-opacity duration-300">
                            <span className="font-josefin font-bold text-3xl md:text-4xl text-ivory tracking-tighter">
                                {logo}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap group-hover:[animation-play-state:paused]">
                    {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
                        <div key={`clone-${i}`} className="mx-8 md:mx-16 flex items-center justify-center opacity-30 hover:opacity-80 transition-opacity duration-300">
                            <span className="font-josefin font-bold text-3xl md:text-4xl text-ivory tracking-tighter">
                                {logo}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
