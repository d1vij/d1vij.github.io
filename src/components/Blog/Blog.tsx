import { MDXFromComponent } from "@d1vij/jassm";
import { cn } from "@d1vij/shit-i-always-use";
import { useLoaderData } from "@tanstack/react-router";
import { Elements } from "@/components/MDX";
import stylemap from "@/content/mdx-styles/mdx.styles";
import Tags from "./Tags";

export default function Blog() {
    const { Component, meta } = useLoaderData({ from: "/blogs/$id" });

    return (
        <div className="">
            <h1
                className={cn(
                    "mt-5 mb-5 rounded bg-theme-secondary p-2 font-bold text-4xl text-theme-primary-900 tracking-tight md:text-6xl",
                    "wrap-break-word",
                )}
            >
                {meta.title}
            </h1>
            <div
                className={cn(
                    "mb-5 w-full rounded bg-theme-secondary text-theme-primary",
                )}
            >
                <Tags tags={meta.tags} />
            </div>

            <MDXFromComponent
                source={Component}
                styles={stylemap}
                elements={Elements}
            />
        </div>
    );
}
