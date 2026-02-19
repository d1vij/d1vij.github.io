import styles from "./project.module.css";
import { Github } from "lucide-react";
import { CgWebsite } from "react-icons/cg";
import { useLoaderData } from "@tanstack/react-router";
import SectionDivider from "./SectionDivider";
import { ProjectLinksSchema } from "./schemas";
import type z from "zod";
import cn from "@/utils/cn";

const LinkFor = ProjectLinksSchema.shape.for;
function getIcon(_for: z.infer<typeof LinkFor>) {
    switch (_for) {
        case "github":
            return Github;
        case "website":
            return CgWebsite;
        default:
            _for satisfies never;
            return null;
    }
}

export default function Links() {
    const { links } = useLoaderData({ from: "/projects/$projectId" });

    if (links.length === 0) return null;
    const linkElms = links.map((l) => {
        const SIcon = getIcon(l.for);
        if (SIcon) {
            return (
                <li key={l.for}>
                    <a
                        href={l.url}
                        className={cn(
                            "flex items-center justify-evenly gap-1 bg-red-700 w-full",

                            "before:content-['*'] before:font-semibold ",
                        )}
                    >
                        <p>{l.for}</p>
                        <SIcon className="size-4"/>
                    </a>
                </li>
            );
        }
        return null;
    });

    return (
        <>
            <div>
                <h2>View this Project on</h2>
                <ul className={cn("pl-6 w-fit")}>{linkElms}</ul>
            </div>
            <SectionDivider />
        </>
    );
}
