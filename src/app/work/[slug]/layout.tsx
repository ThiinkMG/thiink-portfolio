import type { Metadata } from "next";
import { PROJECTS } from "@/lib/data";

type Props = {
    params: Promise<{ slug: string }>;
    children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = PROJECTS.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: project.client,
        description: project.situation.slice(0, 155) + "...",
        openGraph: {
            title: `${project.title} | Thiink Media Graphics`,
            description: project.subtitle,
            url: `https://www.thiinkmediagraphics.com/work/${slug}`,
            images: [
                {
                    url: project.heroImage,
                    width: 1200,
                    height: 630,
                    alt: project.title,
                },
            ],
        },
        alternates: {
            canonical: `/work/${slug}`,
        },
    };
}

export default function CaseStudyLayout({ children }: Props) {
    return children;
}
