import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import Project, { type ProjectMetadata } from "@/components/Project";
import projectRegistry, {
    ProjectRegistrySchema,
} from "@/content/projectRegistry";

export const Route = createFileRoute("/projects/$projectId")({
    component: RouteComponent,
    validateSearch(s) {
        return z.parse(
            z.object({
                focus: z.optional(z.string()),
            }),
            s,
        );
    },
    params: {
        parse: ({ projectId }) => ({
            projectId: z.parse(ProjectRegistrySchema, projectId),
        }),
    },
    loader: async ({ params: { projectId } }) => {
        return {
            id: projectId,
            component: projectRegistry.getComponent(projectId),
            meta: projectRegistry.getMetadata(projectId) as ProjectMetadata,
        };
    },
});

function RouteComponent() {
    const schema = Route.useLoaderData();
    return (
        <section className="flex size-full p-5">
            <Project {...schema} />
        </section>
    );
}
