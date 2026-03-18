import path from "node:path";
import * as v from "valibot";
import { ProjectPreviewsJsonSchema } from "./components/ProjectPreview";
import { toJsonSchema } from "@valibot/to-json-schema";

async function saveSchema(schema: v.GenericSchema, path: string) {
    await Bun.write(
        path,
        JSON.stringify(
            toJsonSchema(
                v
                    /**
                     * There exists a bug in Zed which doesnt allow defining corresponding schemas
                     * via the .zed/settings.json file, instead the schema file must be defined inline
                     * using the $schema property. For this all schemas MUST be of object.
                     * Moreover the schema object is extended here with a property of $schema, just because
                     * zed is complaining again.
                     */
                    .union([
                        v.optional(
                            v.object({
                                $schema: v.string(),
                            }),
                        ),
                        schema,
                    ]),
            ),
            null,
            4,
        ),
    );
}

await saveSchema(
    ProjectPreviewsJsonSchema,
    path.join(__dirname, "../public/schemas/project_previews.schema.json"),
);
