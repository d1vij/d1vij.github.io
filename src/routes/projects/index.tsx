import { cn } from "@d1vij/shit-i-always-use";
import { createFileRoute } from "@tanstack/react-router";
import type { ProjectMetadata } from "@/components/Project";
import ProjectPreview from "@/components/ProjectPreview";
import projectPreviews from "@/content/projectPreviews";
import projectRegistry from "@/content/projectRegistry";
import styles from "./projects.module.css";

export const Route = createFileRoute("/projects/")({
    component: RouteComponent,
    head: () => ({
        meta: [{ title: "Projects" }],
    }),
    loader: () => {
        return projectRegistry.metadata as Record<string, ProjectMetadata>;
    },
});

function RouteComponent() {
    const projectMetas = Route.useLoaderData();
    const projectElms = projectPreviews.map((p) => {
        const meta = projectMetas[p];
        return <ProjectPreview key={p} {...meta} />;
    });
    return (
        <div className="mx-auto mt-10 mb-5 content-container">
            <div
                className={cn(
                    "relative mx-auto grid grid-cols-1 gap-5 overflow-clip border-2 border-x-theme-primary-900 border-y-0 md:border-x-2",
                )}
            >
                <div
                    className={cn(
                        styles.background,
                        "absolute -inset-100 -z-20",
                    )}
                ></div>
                {projectElms}
            </div>
            <div className="mx-auto w-full text-center">
                <a
                    href="https://github.com/d1vij?tab=repositories"
                    target="_blank"
                    className="text-sm underline decoration-2 decoration-dotted hover:decoration-solid"
                    rel="noopener"
                >
                    see more
                </a>
            </div>
        </div>
    );
}
