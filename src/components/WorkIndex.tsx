import type { WorkMetadata } from "@/components/Work";
import WorkList from "@/components/WorkList";

const { librariesRegistry } = await import("@/content/work/librariesRegistry");
const { projectsRegistry } = await import("@/content/work/projectRegistry");

export default function WorkIndex() {
    const projectMetas = projectsRegistry.metadata as Record<
        string,
        WorkMetadata
    >;
    const librariesMetas = librariesRegistry.metadata as Record<
        string,
        WorkMetadata
    >;
    return (
        <>
            <WorkList metadatas={projectMetas} title={"Projects"} />
            <WorkList metadatas={librariesMetas} title={"Libraries"} />
            <div className="mx-auto w-full text-center">
                <a
                    href="https://github.com/d1vij?tab=repositories"
                    target="_blank"
                    className="text-sm italic underline decoration-2 decoration-dotted hover:decoration-solid"
                    rel="noopener"
                >
                    see more
                </a>
            </div>
        </>
    );
}
