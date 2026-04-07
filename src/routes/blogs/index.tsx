import { createFileRoute } from "@tanstack/react-router";
import { blogsRegistry } from "@/content/blogs";

export const Route = createFileRoute("/blogs/")({
    component: RouteComponent,
});

function RouteComponent() {
    if (blogsRegistry.keys.length === 0) {
        return (
            <div className="grid size-full place-items-center italic">
                <span className="">(seems so empty)</span>
            </div>
        );
    }
    return <div>Hello "/blogs/"!</div>;
}
