import { createFileRoute, Link } from "@tanstack/react-router";
import * as v from "valibot";
import Work, { type WorkMetadata } from "@/components/Work";
import { WorkRegistrySchema, workRegistry } from "@/content/work/workRegistry";
import { ArrowUpLeft } from "lucide-react";

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
        <section className="mx-auto mt-4 mb-5 content-container">
            <Link
                to=".."
                className="flex gap-1 items-center justify-start relative mb-2"
            >
                <ArrowUpLeft className="size-4 md:absolute -left-6" />
                Go back
            </Link>
            <Work {...data} />
        </section>
    );
}
