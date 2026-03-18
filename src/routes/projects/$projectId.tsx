import { createFileRoute } from "@tanstack/react-router";
import * as v from "valibot";
import Project, { type ProjectMetadata } from "@/components/Project";
import projectRegistry, {
    ProjectRegistrySchema,
} from "@/content/projectRegistry";

export const Route = createFileRoute("/projects/$projectId")({
    component: RouteComponent,
    validateSearch(s) {
        return v.parse(
            v.object({
                focus: v.optional(v.string()),
            }),
            s,
        );
    },
    params: {
        parse: ({ projectId }) => ({
            projectId: v.parse(ProjectRegistrySchema, projectId),
        }),
    },
    loader: async ({ params: { projectId } }) => {
        return {
            component: projectRegistry.getComponent(projectId),
            meta: projectRegistry.getMetadata(projectId) as ProjectMetadata,
        };
    },
});

function RouteComponent() {
    const data = Route.useLoaderData();
    console.log(data);
    return (
        <section className="mx-auto mt-10 mb-5 content-container">
            <Project {...data} />
        </section>
    );
}
