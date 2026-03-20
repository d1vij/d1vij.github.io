import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpLeft } from "lucide-react";
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
        <section className="mx-auto mt-4 mb-5 content-container">
            <Link
                to=".."
                className="group relative mb-2 flex items-center justify-start gap-1"
            >
                <ArrowUpLeft className="group-hover:-translate-0.5 -left-6 size-4 transition-transform duration-100 md:absolute" />
                Go back
            </Link>
            <Work {...data} />
        </section>
    );
}
