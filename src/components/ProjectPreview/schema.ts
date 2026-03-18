import * as v from "valibot";
import { ValidSkillsSchema } from "@/content/skill-icons";

export const LinkIconSchema = v.object({
    for: v.picklist(["github", "website"]),
    url: v.string(),
});
export type LinkIconType = v.InferInput<typeof LinkIconSchema>;

export const ProjectPreviewSchema = v.object({
    id: v.string(),
    title: v.string(),
    description: v.string(),
    links: v.array(LinkIconSchema),
    skills: v.array(ValidSkillsSchema),
});

export type ProjectPreviewType = v.InferInput<typeof ProjectPreviewSchema>;

export const ProjectPreviewsJsonSchema = v.object({
    projects: v.array(ProjectPreviewSchema),
});
