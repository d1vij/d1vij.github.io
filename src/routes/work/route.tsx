import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { ArrowUpLeft } from "lucide-react";

export const Route = createFileRoute("/work")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        // route component wraps the children under a common layout
        <div className="mx-auto mt-4 mb-5 space-y-4 content-container">
            <Link
                to=".."
                className="group relative mb-2 flex items-center justify-start gap-1"
            >
                <ArrowUpLeft className="group-hover:-translate-0.5 -left-6 size-4 transition-transform duration-100 md:absolute" />
                Go back
            </Link>
            <Outlet />
        </div>
    );
}
