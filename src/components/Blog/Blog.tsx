import { MDXFromComponent } from "@d1vij/jassm";
import { cn } from "@d1vij/shit-i-always-use";
import { useLoaderData } from "@tanstack/react-router";
import { Clock } from "lucide-react";
import { Elements } from "@/components/MDX";
import stylemap from "@/content/mdx-styles/mdx.styles";
import Tags from "./Tags";
// import styles from "./blog.module.css";

export default function Blog() {
    const { Component, meta } = useLoaderData({ from: "/blogs/$id" });

    const ReadingMinutes = meta.reading_minutes ? (
        <span className="flex items-center gap-2 text-sm text-theme-secondary">
            <Clock className="size-4" /> {meta.reading_minutes} minutes
        </span>
    ) : null;
    return (
        <article>
            <div
                aria-hidden
                className={cn(
                    "mt-5 mb-2 rounded bg-theme-secondary p-2 font-black text-5xl text-theme-primary-900 md:text-8xl",
                    "wrap-break-word text-shadow-sm text-shadow-theme-primary-200",
                    "relative font-thicc",
                )}
            >
                {/*<div
                    aria-hidden
                    className={cn(
                        styles.ribbon,
                        "shadow-lg shadow-theme-primary-200",
                        "absolute top-0 right-2",
                        "apply h-full w-10 z-20 opacity-85",
                        "bg-theme-primary-900",
                        "from-20% from-theme-primary to-theme-primary-900 to-80% bg-linear-to-b",
                    )}
                ></div>*/}
                <h1 className="relative">{meta.title}</h1>
            </div>
            <section
                className={cn(
                    "mb-6 w-full space-y-2 overflow-clip rounded text-sm text-theme-primary",
                )}
            >
                <span className="flex justify-between gap-2 text-theme-secondary">
                    <span>{meta.published.toDateString()}</span>
                    {ReadingMinutes}
                </span>
                <Tags tags={meta.tags} />
            </section>

            <MDXFromComponent
                source={Component}
                styles={stylemap}
                elements={Elements}
            />
        </article>
    );
}
