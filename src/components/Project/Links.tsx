import { title } from "radashi";
import { cn } from "@d1vij/shit-i-always-use";
import { useLoaderData } from "@tanstack/react-router";
import SectionDivider from "./SectionDivider";

export default function Links() {
    const {
        meta: { links },
    } = useLoaderData({ from: "/projects/$projectId" });

    if (links.length === 0) return null;
    const linkElms = links.map((l) => {
        return (
            <li key={l.for}>
                <a
                    href={l.url}
                    className={cn(
                        "grid w-full grid-cols-[auto_1fr] items-baseline gap-1",

                        "before:font-semibold before:content-['*']",
                    )}
                >
                    <p>{title(l.for)}</p>
                </a>
            </li>
        );
    });

    return (
        <>
            <div>
                <h2>View this Project on</h2>
                <ul className={cn("w-fit pl-6")}>{linkElms}</ul>
            </div>
            <SectionDivider />
        </>
    );
}
