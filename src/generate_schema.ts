import { z } from "zod";
import path from "node:path";
import { ProjectsJsonSchema } from "./components/ProjectPreview";

async function saveSchema(schema: z.ZodObject, path: string) {
    await Bun.write(
        path,
        JSON.stringify(
            z
                /**
                 * There exists a bug in Zed which doesnt allow defining corresponding schemas
                 * via the .zed/settings.json file, instead the schema file must be defined inline
                 * using the $schema property. For this all schemas MUST be of object.
                 * Moreover the schema object is extended here with a property of $schema, just because
                 * zed is complaining again.
                 */
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
