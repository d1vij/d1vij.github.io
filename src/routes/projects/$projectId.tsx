import { z } from "zod";
import { createFileRoute } from "@tanstack/react-router";

import Project from "@/components/Project";
import { ProjectSchema } from "@/components/Project";

export const Route = createFileRoute("/projects/$projectId")({
    component: RouteComponent,
    params: {
        parse: (raw) => ({
            projectId: z.coerce
                .string()
                .toLowerCase()
                .transform((s) => s.replaceAll(" ", "-"))
                .parse(raw.projectId),
        }),
    },
    loader: async ({ params }) => {
        const response = await fetch(`/projects/${params.projectId}.json`);
        const json = await response.json();
        return ProjectSchema.parse(json);
    },
});

function RouteComponent() {
    const schema = Route.useLoaderData();
    return (
        <section className="p-5 flex size-full">
            <Project {...schema} />
        </section>
    );
}
