import type * as z from "zod/v4";
import { ProjectImages } from "./ProjectImages";
import type { ProjectSchema } from "./schemas";
import SectionDivider from "./SectionDivider";
import Links from "./Links";
import TextSection from "./TextSection";
type ProjectProps = z.infer<typeof ProjectSchema>;
export default function Project({
    title,
    // text,
    images,
    // links,
    // stack,
}: ProjectProps) {
    console.log(title);
    return (
        <div className="size-full grow border-2 border-theme-primary-900 p-2">
            <div className="perspective-distant">
                <h1 className="text-5xl">{title}</h1>
                <SectionDivider />
                <Links />
                <ProjectImages images={images} />
                <TextSection />
            </div>
        </div>
    );
}
