import { useVibrate } from "@d1vij/shit-i-always-use";
import { Link } from "@tanstack/react-router";
import { AppWindow, Github } from "lucide-react";
import SkillIcons from "@/components/SkillIcons";
import type { Icon } from "@/types";
import type { ProjectMetadata } from "../Project/schemas";
import type { LinkIconType } from "./schema";

type ProjectPreviewProps = ProjectMetadata;

export default function ProjectPreview({
    description,
    links,
    stack,
    title,
    id,
}: ProjectPreviewProps) {
    const skillIcons = stack.map((s) => <SkillIcons key={s} skill={s} />);
    const linkIcons = Object.keys(links).map((l) => {
        const k = l as LinkIconType["for"];
        return (
            <LinkIcon key={k} for={k} url={links[k as keyof typeof links]} />
        );
    });
    return (
        <div className="flex justify-between gap-1 border-2 border-x-0 border-y-theme-primary-900 bg-theme-primary p-2 md:border-y-2 md:p-4">
            {/* links */}
            <div className="">
                <Link
                    className="mb-2 font-semibold text-2xl underline decoration-theme-primary-400/60 decoration-dotted hover:decoration-solid md:text-3xl md:decoration-3"
                    to={`/projects/$projectId`}
                    params={{ projectId: id }}
                >
                    {title}
                </Link>
                <p className="mb-2 text-sm text-theme-primary-400 md:mb-3 md:text-base">
                    {description}
                </p>
                <div className="flex flex-wrap gap-1 md:gap-2">
                    {skillIcons}
                </div>
            </div>
            <div className="flex flex-col gap-1">{linkIcons}</div>
        </div>
    );
}

type LinkProps = LinkIconType;
function LinkIcon(props: Partial<LinkProps>) {
    const vibrator = useVibrate();

    if (props.for === undefined) return null;

    function handleClick() {
        vibrator(50);
    }

    let Icon: Icon;
    switch (props.for) {
        case "github":
            Icon = Github;
            break;
        case "website":
            Icon = AppWindow;
            break;
        default:
            props.for satisfies never;
            return;
    }

    return (
        <a
            onClick={handleClick}
            href={props.url}
            target="_blank"
            className="cursor-pointer px-1"
            rel="noopener"
        >
            <Icon className="size-4.5 stroke-theme-primary-400" />
        </a>
    );
}
