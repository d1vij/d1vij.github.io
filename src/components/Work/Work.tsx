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
            <h1 className="font-semibold text-5xl tracking-tight">
                {meta.title}
            </h1>
            <Links links={meta.links} />
            <SectionDivider />
            {/*<ProjectImages images={meta.images} />*/}
            <TextSection
                component={component}
                hasWebsite={Boolean(meta.links.website)}
            />
            <Preview link={meta.links.website} />
        </div>
    );
}
