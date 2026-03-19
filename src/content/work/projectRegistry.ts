import { Registry } from "@d1vij/jassm";
import * as v from "valibot";

export const projectsRegistry = new Registry({
    modulesGlob: import.meta.glob("/src/assets/mdx/projects/**/*.mdx"),
    metadataGlob: import.meta.glob("/src/assets/mdx/projects/**/*.meta.ts", {
        eager: true,
        import: "default",
    }),
    root: "/src/assets/mdx/projects",
    virtual: "",
});

export default projectsRegistry;
export const ProjectsRegistrySchema = v.picklist(projectsRegistry.keys);

const schema = v.array(ProjectsRegistrySchema);
/**
 * Order of items when in WorkList
 */
export const projectOrder = v.parse(schema, [
    "spotify-data-analysis",
    "browsersh",
    "bad-ui-battles",
    "election-software",
    "portfolio",
]);

console.log(projectsRegistry.components)
