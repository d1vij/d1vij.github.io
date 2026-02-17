import { z } from "zod";
import { createFileRoute } from "@tanstack/react-router";
import { Activity, useState } from "react";

import validProjects from "@/assets/valid_projects.json"

const schema = z.object({
    slug: z
        .string()
        .min(3)
        .toLowerCase()
});

export const Route = createFileRoute("/projects/$projectId")({
    component: RouteComponent,
    params: {
        parse: (params) => schema.parse(params),
    },
    loader: ({ params }) => fetch("/")
});


function RouteComponent() {
    const { slug } = Route.useParams();
    const data = Route.useLoaderData()
    return (
        <div>
            {data}
            {slug}
        </div>
    )
}
