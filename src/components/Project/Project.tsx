import type * as z from "zod/v4";
import Links from "./Links";
import { ProjectImages } from "./ProjectImages";
import SectionDivider from "./SectionDivider";
import type { ProjectMetadata } from "./schemas";
import TextSection from "./TextSection";

type ProjectProps = {
    id: string;
    component: React.LazyExoticComponent<React.ComponentType>;
    meta: ProjectMetadata;
};
export default function Project({ component, id, meta }: ProjectProps) {
    console.log(meta.title);
    return (
        <div className="size-full grow border-2 border-theme-primary-900 p-2">
            <div className="perspective-distant">
                <h1 className="text-5xl">{meta.title}</h1>
                <SectionDivider />
                <Links />
                <ProjectImages images={meta.images} />
                <TextSection />
            </div>
        </div>
    );
}
