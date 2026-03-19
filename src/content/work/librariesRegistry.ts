import { Registry } from "@d1vij/jassm";
import * as v from "valibot";

export const librariesRegistry = new Registry({
    modulesGlob: import.meta.glob("/src/assets/mdx/libraries/**/*.mdx"),
    metadataGlob: import.meta.glob("/src/assets/mdx/libraries/**/*.meta.ts", {
        eager: true,
        import: "default",
    }),
    root: "/src/assets/mdx/libraries",
    virtual: "",
});

export default librariesRegistry;
export const LibrariesRegistrySchema = v.picklist(librariesRegistry.keys);

// const schema = v.array(LibrariesRegistrySchema);
/**
 * Order of items when in WorkList
 */
export const librariesOrder = librariesRegistry.keys;
