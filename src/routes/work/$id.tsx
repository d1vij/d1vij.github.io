import { createFileRoute } from "@tanstack/react-router";
import { lazy } from "react";
import * as v from "valibot";
import type { WorkMetadata } from "@/components/Work";

const Work = lazy(() => import("@/components/Work"));

const { WorkRegistrySchema, workRegistry } = await import(
    "@/content/work/workRegistry"
);
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
    head({ loaderData }) {
        return {
            meta: [
                {
                    title: `${loaderData?.meta.title || "Work"} | Divij Verma`,
                },
            ],
        };
    },
});

function RouteComponent() {
    const data = Route.useLoaderData();
    return <Work {...data} />;
}
