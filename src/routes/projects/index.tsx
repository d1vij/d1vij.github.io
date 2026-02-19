import ProjectPreview from "@/components/ProjectPreview";
import { createFileRoute } from "@tanstack/react-router";
import {
    ProjectsJsonSchema,
    type Project,
} from "@/components/ProjectPreview/ProjectPreview";

export const Route = createFileRoute("/projects/")({
    component: RouteComponent,
    head: () => ({
        meta: [{ title: "Projects" }],
    }),
    loader: async () => {
        const response = await fetch("/project_previews.json");
        const json = await response.json();
        return ProjectsJsonSchema.parse(json).projects;
    },
});

function RouteComponent() {
    const projects: Project[] = Route.useLoaderData();
    const projectElms = projects.map((p) => (
        <ProjectPreview key={p.id} {...p} />
    ));
    return (
        <div className="relative overflow-clip p-5 contain-content md:pt-10">
            <div className="mx-auto mb-7 grid grid-cols-1 gap-5 border-2 border-x-theme-primary-900 border-y-0 md:w-[80%] md:border-x-2 lg:w-[50%]">
                {projectElms}
            </div>
            <span className="absolute bottom-0 left-0 mx-auto w-full text-center">
                <a
                    href="https://github.com/d1vij?tab=repositories"
                    target="_blank"
                    className="text-sm underline decoration-2 decoration-dotted hover:decoration-solid"
                    rel="noopener"
                >
                    see more
                </a>
            </span>
        </div>
    );
}
