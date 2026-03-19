import * as v from "valibot";
import { ValidSkillsSchema } from "@/content/skill-icons";

export const WorkMetadata = v.object({
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

export type WorkMetadata = v.InferInput<typeof WorkMetadata>;
export function generateWorkMetadata(meta: WorkMetadata): WorkMetadata {
    return meta;
}
