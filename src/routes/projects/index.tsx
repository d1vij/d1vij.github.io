import ProjectPreview from "@/components/ProjectPreview";
import { createFileRoute } from "@tanstack/react-router";
import { ProjectsJsonSchema, type Project } from "@/components/ProjectPreview/ProjectPreview";

export const Route = createFileRoute("/projects/")({
    component: RouteComponent,
    loader: async () => {
        const response = await fetch("/project_previews.json");
        const json = await response.json();
        return ProjectsJsonSchema.parse(json).projects;
    }
});

function RouteComponent() {
    const projects: Project[] = Route.useLoaderData();
    const projectElms = projects.map(p => <ProjectPreview key={p.id} {...p}/>)
    return (
        <div className="p-5 md:pt-10 relative overflow-clip contain-content">
            <div className="grid grid-cols-1 gap-5 border-2 md:border-x-2 border-x-theme-primary-900 border-y-0 md:w-[80%] lg:w-[50%] mx-auto mb-7">
                {projectElms}
            </div>
            <span className="text-center w-full mx-auto absolute bottom-0 left-0">
                <a href="https://github.com/d1vij?tab=repositories" target="_blank"
                    className="text-sm underline decoration-2 decoration-dotted hover:decoration-solid "
                >see more</a>
            </span>
        </div>

    );
}
