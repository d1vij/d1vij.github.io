import { Registry } from "@d1vij/jassm";
import type { KeysWithValueAsType } from "@d1vij/shit-i-always-use";
import * as v from "valibot";

export const blogsRegistry = new Registry({
    modulesGlob: import.meta.glob("/src/assets/mdx/blogs/**/*.mdx"),
    metadataGlob: import.meta.glob("/src/assets/mdx/blogs/**/*.meta.ts", {
        eager: true,
        import: "default",
    }),
    root: "/src/assets/mdx/blogs",
    virtual: "",
});
export const BlogRegistryKeySchema = v.picklist(blogsRegistry.keys);

export const UNDEFINED_READING_TIME = -1;
export const UNDEFINED_QUOTE = "03c4e6ab-9849-4a15-8c38-ab97c6af547d";
export const UNDEFINED_QUOTE_AUTHOR = "894e9cab-0523-47b9-82c2-dcd300aa812c";

/**
 * Schema followed in blog's metadata
 */
export const UserDefinedMetadataSchema = v.object({
    title: v.string(),
    published: v.date(),
    tags: v.array(v.string()),
    reading_minutes: v.optional(v.number(), UNDEFINED_READING_TIME),
});

export type UserDefinedMetadata = v.InferInput<
    typeof UserDefinedMetadataSchema
>;
export type UserDefinedMetadataKey = keyof UserDefinedMetadata;

/**
 * Updated schema with system added information in it
 */
export const RegistryMetadataSchema = v.object({
    ...UserDefinedMetadataSchema.entries,
    __splat: BlogRegistryKeySchema,
});

export type RegistryMetadata = v.InferInput<typeof RegistryMetadataSchema>;
export type RegistryMetadataKeys = keyof RegistryMetadata;
/**
 * Registry Metadata keys whose values are strings
 */
export type RegistryMetadataKeysWithStringValues = KeysWithValueAsType<
    RegistryMetadata,
    string
>;
