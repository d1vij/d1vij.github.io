import { cn } from "@d1vij/shit-i-always-use";
import Links from "./Links";
import Preview from "./Preview";
import SectionDivider from "./SectionDivider";
import type { ProjectMetadata } from "./schemas";
import TextSection from "./TextSection";

type ProjectProps = {
    component: React.LazyExoticComponent<React.ComponentType>;
    meta: ProjectMetadata;
};
export default function Project({ component, meta }: ProjectProps) {
    return (
        <div
            className={cn("", "mx-auto border-2 border-theme-primary-900 p-2")}
        >
            <h1 className="text-5xl">{meta.title}</h1>
            <SectionDivider />
            <Links links={meta.links} />
            {/*<ProjectImages images={meta.images} />*/}
            <TextSection component={component} />
            <Preview link={meta.links.website} />
        </div>
    );
}
