import { MetadataRoute } from "next";
import { getProjects } from "@/lib/cms";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.thiinkmediagraphics.com";

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${baseUrl}/work`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];

    // Dynamic case study pages
    const projects = getProjects();
    const caseStudyPages: MetadataRoute.Sitemap = projects.map((project) => ({
        url: `${baseUrl}/work/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    return [...staticPages, ...caseStudyPages];
}
