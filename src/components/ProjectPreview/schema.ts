import { z } from "zod";
import { ValidSkillsSchema } from "@/content/skill-icons";

export const LinkIconSchema = z.object({
    for: z.enum(["github", "website"]),
    url: z.httpUrl(),
});
export type LinkIconType = z.infer<typeof LinkIconSchema>;

export const ProjectPreviewSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    links: z.array(LinkIconSchema),
    skills: z.array(ValidSkillsSchema),
});

export type ProjectPreviewType = z.infer<typeof ProjectPreviewSchema>;

export const ProjectPreviewsJsonSchema = z.object({
    projects: z.array(ProjectPreviewSchema),
});
