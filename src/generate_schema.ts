import { z } from "zod";
import path from "path";
import { ProjectsJsonSchema } from "./routes/projects";

async function saveSchema(schema: z.ZodObject, path: string) {
    await Bun.write(
        path,
        JSON.stringify(
            z
                .object({
                    $schema: z.string().optional(),
                })
                .extend(schema.shape)
                .toJSONSchema(),
            null,
            4,
        ),
    );
}

await saveSchema(
    ProjectsJsonSchema,
    path.join(__dirname, "../public/project_previews.schema.json"),
);
