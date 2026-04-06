import { createFileRoute } from "@tanstack/react-router";
import * as v from "valibot";
import Blog from "@/components/Blog";
import {
    BlogRegistryKeySchema,
    blogsRegistry,
    type UserDefinedMetadata,
} from "@/content/blogs";

export const Route = createFileRoute("/blogs/$id")({
    component: Blog,
    params: {
        parse: ({ id }) => ({
            id: v.parse(BlogRegistryKeySchema, id),
        }),
    },
    loader: ({ params: { id } }) => {
        return {
            Component: blogsRegistry.getComponent(id),
            meta: blogsRegistry.getMetadata<UserDefinedMetadata>(id),
        };
    },
});
