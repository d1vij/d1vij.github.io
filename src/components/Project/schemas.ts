import { z } from "zod";
import { ValidSkillsSchema } from "@/content/skill-icons";

export const ProjectMetadata = z.object({
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
    links: z.array(
        z.object({
            url: z.httpUrl(),
            for: z.string().min(1),
        }),
    ),
    stack: z.array(
        z.object({
            section: z.string().min(1),
            used: z.array(ValidSkillsSchema),
        }),
    ),
    text: z.array(z.string().min(1)),
});

export type ProjectMetadata = z.infer<typeof ProjectMetadata>;
export function generateProjectMetadata(meta: ProjectMetadata): ProjectMetadata {
    return meta;
}
export const ProjectImagesSchema = ProjectMetadata.shape.images.element.pick({
    title: true,
    url: true,
});
