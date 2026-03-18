import { Registry } from "@d1vij/jassm";
import { z } from "zod";

const projectRegistry = new Registry({
    modulesGlob: import.meta.glob("/src/assets/mdx/projects/**/*.mdx"),
    metadataGlob: import.meta.glob("/src/assets/mdx/projects/**/*.meta.ts", {
        eager: true,
        import: "default",
    }),
    root: "/src/assets/mdx/projects",
    virtual: "",
});

export default projectRegistry;
export const ProjectRegistrySchema = z.enum(projectRegistry.keys);
