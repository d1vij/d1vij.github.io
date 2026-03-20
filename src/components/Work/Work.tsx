import { cn } from "@d1vij/shit-i-always-use";
import Links from "./Links";
import Preview from "./Preview";
import SectionDivider from "./SectionDivider";
import type { WorkMetadata } from "./schemas";
import TextSection from "./TextSection";

type WorkProps = {
    component: React.LazyExoticComponent<React.ComponentType>;
    meta: WorkMetadata;
};
export default function Work({ component, meta }: WorkProps) {
    return (
        <div className={cn("mx-auto border-2 border-theme-primary-900/60 p-2")}>
            <h1 className="text-5xl font-semibold tracking-tight">{meta.title}</h1>
            <Links links={meta.links} />
            <SectionDivider />
            {/*<ProjectImages images={meta.images} />*/}
            <TextSection component={component} />
            <Preview link={meta.links.website} />
        </div>
    );
}
