import * as v from "valibot";
import { ValidSkillsSchema } from "@/content/skill-icons";

export const ProjectMetadata = v.object({
    id: v.string(),
    title: v.string(),
    description: v.string(),
    links: v.partial(
        v.object({
            github: v.string(),
            website: v.string(),
        }),
    ),
    stack: v.array(ValidSkillsSchema),
});

export type ProjectMetadata = v.InferInput<typeof ProjectMetadata>;
export function generateProjectMetadata(
    meta: ProjectMetadata,
): ProjectMetadata {
    return meta;
}
