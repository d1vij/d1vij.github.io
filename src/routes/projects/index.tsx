import {z} from "zod"
import ProjectPreview from "@/components/ProjectPreview";
import { createFileRoute } from "@tanstack/react-router";
import { ProjectPreviewSchema, type Project } from "@/components/ProjectPreview/ProjectPreview";

export const ProjectsJsonSchema = z.object({
    projects: z.array(ProjectPreviewSchema)
});
export const Route = createFileRoute("/projects/")({
    component: RouteComponent,
    loader: async () => {
        const response = await fetch("/project_previews.json");
        const json = await response.json();
        return ProjectsJsonSchema.parse(json);
    }
});

function RouteComponent() {
    const projects: Project[] = Route.useLoaderData();
    const projectElms = projects.map(p => <ProjectPreview key={p.id} {...p}/>)

    return (
        <div className="p-5 md:pt-10">
            <div className="grid grid-cols-1 gap-5 border-2 md:border-x-2 border-x-theme-primary-900 border-y-0 md:w-[80%] lg:w-[50%] mx-auto">
                {projectElms}
            </div>
        </div>
    );
}
