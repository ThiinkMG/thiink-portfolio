import { getProjects } from "@/lib/cms";
import { WorkPageClient } from "./WorkPageClient";

// ─────────────────────────────────────────────────────────────────────────────
// WORK PAGE - "The Gallery"
// Server component that fetches projects and passes to client
// ─────────────────────────────────────────────────────────────────────────────

export default function WorkPage() {
    const projects = getProjects();
    return <WorkPageClient projects={projects} />;
}
