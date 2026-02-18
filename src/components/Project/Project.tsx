import type * as z from "zod/v4";
import { ProjectImages, type ProjectSchema } from "./ProjectImages";

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
                <ProjectImages images={images} />
            </div>
        </div>
    );
}
