import { getProjects, getSiteSettings } from "@/lib/cms";
import { WorkPageClient } from "./WorkPageClient";

// ─────────────────────────────────────────────────────────────────────────────
// WORK PAGE - "The Gallery"
// Server component that fetches projects and passes to client
// ─────────────────────────────────────────────────────────────────────────────

export default function WorkPage() {
    const projects = getProjects();
    const siteSettings = getSiteSettings();
    return <WorkPageClient projects={projects} siteSettings={siteSettings} />;
}
