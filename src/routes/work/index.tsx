import { createFileRoute } from "@tanstack/react-router";
import type { WorkMetadata } from "@/components/Work";
import WorkList from "@/components/WorkList";
import librariesRegistry, {
    librariesOrder,
} from "@/content/work/librariesRegistry";
import { projectOrder, projectsRegistry } from "@/content/work/projectRegistry";

export const Route = createFileRoute("/work/")({
    component: RouteComponent,
    head: () => ({
        meta: [{ title: "Divij Verma | Work" }],
    }),
});

const projectMetas = projectsRegistry.metadata as Record<string, WorkMetadata>;
const librariesMetas = librariesRegistry.metadata as Record<
    string,
    WorkMetadata
>;

function RouteComponent() {
    return (
        <div className="mx-auto mt-10 mb-5 content-container">
            <WorkList
                metadatas={projectMetas}
                title={"Projects"}
                order={projectOrder}
            />
            <WorkList
                metadatas={librariesMetas}
                title={"Libraries"}
                order={librariesOrder}
            />
            <div className="mx-auto w-full text-center">
                <a
                    href="https://github.com/d1vij?tab=repositories"
                    target="_blank"
                    className="text-sm underline decoration-2 decoration-dotted hover:decoration-solid"
                    rel="noopener"
                >
                    see more
                </a>
            </div>
        </div>
    );
}
