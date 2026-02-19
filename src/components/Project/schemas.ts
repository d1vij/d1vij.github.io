import * as z from "zod";
import { LinkIconSchema } from "@/components/ProjectPreview";
import { ValidSkillsSchema } from "@/content/skills";
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
export const ProjectImageSchema = ProjectSchema.shape.images.element.pick({
    title: true,
    url: true,
});

export const ProjectLinksSchema = ProjectSchema.shape.links.element.pick({
    for: true,
    url: true,
});
