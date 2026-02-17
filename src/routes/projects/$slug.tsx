import { z } from "zod";
import { createFileRoute } from "@tanstack/react-router";

const schema = z.object({
    slug: z
        .string()
        .min(3)
        .regex(/^[\w\d\-_]+$/),
});

export const Route = createFileRoute("/projects/$slug")({
    component: RouteComponent,
    params: {
        parse: (params) => schema.parse(params),
    },
});

function RouteComponent() {
    const { slug } = Route.useParams();
    return <div>{slug}</div>;
}
