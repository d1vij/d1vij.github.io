import styles from "./project.module.css";
import { useEffect, useRef, useState } from "react";
import * as z from "zod";

import { LinkIconSchema } from "@/components/ProjectPreview";
import { ValidSkillsSchema } from "@/content/skills";
import cn from "@/utils/cn";
import { useParams } from "@tanstack/react-router";

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
const ProjectImageSchema = ProjectSchema.shape.images.element.pick({
    title: true,
    url: true,
});

type ProjectImageProps = z.infer<typeof ProjectImageSchema> & {
    z: number;
    totalImages: number;
};

function randomBetween(min: number, max: number) {
    return () => Math.random() * (max - min + 1) + min;
}

const randomRotation = randomBetween(-5, 5);
const randomYTranslate = randomBetween(-40, 40);
export function ProjectImage({
    title,
    url,
    z,
    totalImages,
}: ProjectImageProps) {
    const { projectId } = useParams({from:"/projects/$projectId"})
    const ref = useRef<HTMLInputElement>(null);
    const [isChecked, setIsChecked] = useState(false);
    const [rotation, setRotation] = useState(randomRotation);

    const center = (totalImages - 1) / 2;
    const delta = center - z;
    const translate = `translate(${delta * 60}px, ${randomYTranslate()}px)`;


    function handleChange() {
        setIsChecked(c => !c)
    }

    useEffect(() => {
        const elm = ref.current;
        if (!elm) return;
        elm.focus();
    }, []);

    const rotate = `rotate(${rotation}deg)`;
    const transform = `${translate} ${rotate} `;
    return (
        <label
            style={{
                transform: transform,
            }}
            className={cn(
                styles.projectImage,
                "absolute aspect-auto h-[80%]",
            )}
        >
            <input
                ref={ref}
                type="radio"
                onChange={handleChange}
                name={projectId}
                aria-label={title}
                className="absolute opacity-0"
                defaultChecked={z === center}
            />
            <img
                alt={title}
                src={url}
                loading="lazy"
                className="m-2 aspect-auto h-full border-theme-primary-700 border rounded"
            />
        </label>
    );
}

type ProjectImagesProps = {
    images: z.infer<typeof ProjectImageSchema>[];
};
export function ProjectImages({ images }: ProjectImagesProps) {
    const imageElms = [];
    for (let z = 0; z < images.length; z++) {
        const image = images[z];
        imageElms.push(
            <ProjectImage
                {...image}
                z={z}
                totalImages={images.length}
                key={image.title}
            />,
        );
    }
    return (
        <section className="relative aspect-video w-full  md:w-20 flex justify-center">
            {imageElms}
        </section>
    );
}

//
