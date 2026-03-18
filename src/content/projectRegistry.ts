import {z} from "zod"
import { Registry } from "@d1vij/jassm";

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
export const ProjectRegistrySchema = z.enum(projectRegistry.keys)

console.log(projectRegistry.metadata)
