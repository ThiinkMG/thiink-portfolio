import { notFound } from "next/navigation";
import { getProjectBySlug, getNextProject, getProjectSlugs } from "@/lib/cms";
import { CaseStudyPageClient } from "./CaseStudyPageClient";

// ─────────────────────────────────────────────────────────────────────────────
// CASE STUDY PAGE - Server Component
// Fetches project data from CMS and renders the client component
// ─────────────────────────────────────────────────────────────────────────────

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = getProjectSlugs();
    return slugs.map((slug) => ({ slug }));
}

export default async function CaseStudyPage({ params }: PageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    const nextProject = getNextProject(slug);

    return <CaseStudyPageClient project={project} nextProject={nextProject} />;
}
