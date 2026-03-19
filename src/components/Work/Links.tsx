import { cn } from "@d1vij/shit-i-always-use";
import { title } from "radashi";
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
                    className={
                        "underline decoration-2 decoration-dotted hover:decoration-solid"
                    }
                >
                    {title(k)}
                </a>
            </li>
        );
    });

    return (
        <>
            <div className="mt-4">
                <ul className={cn("w-fit flex flex-wrap gap-2")}>{linkElms}</ul>
            </div>
        </>
    );
}
