import * as v from "valibot";
import { type ValidSkill, ValidSkillsSchema } from "@/content/skill-icons";

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

export type WorkMetadata = Omit<v.InferInput<typeof WorkMetadata>, "stack"> & {
    stack: ValidSkill[];
};

export function generateWorkMetadata(meta: WorkMetadata): WorkMetadata {
    return meta;
}
