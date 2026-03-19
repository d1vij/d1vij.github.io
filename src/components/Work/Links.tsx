import { cn } from "@d1vij/shit-i-always-use";
import { title } from "radashi";
import SectionDivider from "./SectionDivider";
import type { WorkMetadata } from "./schemas";

type LinksProps = {
    links: WorkMetadata["links"];
};
export default function Links({ links }: LinksProps) {
    const keys = Object.keys(links) as (keyof typeof links)[];

    if (keys.length === 0) return null;
    const linkElms = keys.map((k) => {
        return (
            <li key={k}>
                <a
                    href={links[k]}
                    target="_blank"
                    rel="noopener"
                    className={cn(
                        "grid w-full grid-cols-[auto_1fr] items-baseline gap-1",

                        "before:font-semibold before:content-['*']",
                    )}
                >
                    <p>{title(k)}</p>
                </a>
            </li>
        );
    });

    return (
        <>
            <div>
                <h2 className="text-xl">View this on</h2>
                <ul className={cn("w-fit")}>{linkElms}</ul>
            </div>
            <SectionDivider />
        </>
    );
}
