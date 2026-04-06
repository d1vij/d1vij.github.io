import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tags/$slug")({
    component: RouteComponent,
});

function RouteComponent() {
    return <div>Hello "/tags/$slug"!</div>;
}
