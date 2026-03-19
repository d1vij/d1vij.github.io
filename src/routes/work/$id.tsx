import { createFileRoute } from "@tanstack/react-router";
import * as v from "valibot";
import Work, { type WorkMetadata } from "@/components/Work";
import { WorkRegistrySchema, workRegistry } from "@/content/work/workRegistry";

export const Route = createFileRoute("/work/$id")({
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
        parse: ({ id }) => ({
            id: v.parse(WorkRegistrySchema, id),
        }),
    },
    loader: async ({ params: { id } }) => {
        return {
            component: workRegistry.getComponent(id),
            meta: workRegistry.getMetadata(id) as WorkMetadata,
        };
    },
});

function RouteComponent() {
    const data = Route.useLoaderData();
    console.log(data);
    return (
        <section className="mx-auto mt-10 mb-5 content-container">
            <Work {...data} />
        </section>
    );
}
