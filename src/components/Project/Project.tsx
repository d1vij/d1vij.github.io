import { z } from "zod";

import { LinkIconSchema } from "@/components/ProjectPreview";
import { ValidSkillsSchema } from "@/content/skills";
import { useState } from "react";

export const ProjectSchema = z.object({
    title: z.string().min(1),
    images: z.array(
        z.object({
            title: z.string().min(1),
            url: z
                .string()
                .regex(
                    /^\/(?:[a-zA-Z0-9_-]+\/)*[a-zA-Z0-9_-]+\.(png|jpeg|jpg|webp)$/i,
                ),
        }),
    ),
    links: z.array(LinkIconSchema),
    stack: z.array(
        z.object({
            section: z.string().min(1),
            used: z.array(ValidSkillsSchema),
        }),
    ),
    text: z.array(z.string().min(1)),
});

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
            <div className="">
                <h1 className="text-5xl">{title}</h1>
                <ProjectImages images={images} />
            </div>
        </div>
    );
}

//

const ProjectImageSchema = ProjectSchema.shape.images.element.pick({
    title: true,
    url: true,
});

type ProjectImageProps = z.infer<typeof ProjectImageSchema> & {
    z: number;
    zMax: number;
};
function ProjectImage({ title, url, z, zMax }: ProjectImageProps) {
    const [isFocused, setIsFocused] = useState(false);
    function handleFocus(_: React.FocusEvent<HTMLButtonElement>) {
        setIsFocused(true);
    }
    function handleBlur(_: React.FocusEvent<HTMLButtonElement>) {
        setIsFocused(false);
    }
    return (
        <button
            type="button"
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{
                zIndex: isFocused ? zMax : z,
                translate: `${10 * z}px`,
            }}
            className="absolute aspect-auto h-full"
        >
            <img
                alt={title}
                src={url}
                loading="lazy"
                className="m-2 aspect-auto h-full bg-red-300 outline-2 outline-red-300"
            />
        </button>
    );
}

type ProjectImagesProps = {
    images: z.infer<typeof ProjectImageSchema>[];
};
function ProjectImages({ images }: ProjectImagesProps) {
    const imageElms = [];
    for (let z = 0; z < images.length; z++) {
        const image = images[z];
        imageElms.push(
            <ProjectImage
                {...image}
                z={z}
                zMax={images.length + 1}
                key={image.title}
            />,
        );
    }
    return (
        <section className="relative aspect-video w-full bg-white md:w-20">
            {imageElms}
        </section>
    );
}

//
