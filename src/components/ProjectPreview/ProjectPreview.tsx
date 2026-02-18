import SkillIcons from "@/components/SkillIcons";
import { ValidSkillsSchema } from "@/content/skills";
import { useVibrate } from "@/hooks";
import type { Icon } from "@/types";
import { Link } from "@tanstack/react-router";
import z from "zod";

import { AppWindow, Github } from "lucide-react";

export const LinkIconSchema = z.object({
    for: z.enum(["github", "website"]),
    url: z.httpUrl(),
});
type LinkIcon = z.infer<typeof LinkIconSchema>;

export const ProjectPreviewSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    links: z.array(LinkIconSchema),
    skills: z.array(ValidSkillsSchema),
});
type ProjectPreviewProps = {
    id: string;
    title: string;
    description: string;
    links: LinkIcon[];
    skills: typeof ValidSkillsSchema.type;
};
export type Project = ProjectPreviewProps;
export const ProjectsJsonSchema = z.object({
    projects: z.array(ProjectPreviewSchema),
});

export default function ProjectPreview(props: ProjectPreviewProps) {
    const { title, description, skills, links, id } =
        ProjectPreviewSchema.parse(props);
    const skillIcons = skills.map((s) => <SkillIcons key={s} skill={s} />);
    const linkIcons = links.map((l) => <LinkIcon key={l.for} {...l} />);
    return (
        <div className="flex justify-between gap-1 border-2 border-x-0 border-y-theme-primary-900 p-2 md:border-y-2 md:p-4">
            {/* links */}
            <div className="">
                <Link
                    className="mb-2 font-semibold text-2xl underline decoration-theme-primary-400 decoration-dotted hover:decoration-solid md:text-3xl"
                    to={`/projects/$projectId`}
                    params={{projectId: id}}
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

type LinkProps = LinkIcon;
function LinkIcon(props: LinkProps) {
    const vibrator = useVibrate();
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
        >
            <Icon className="size-4.5 stroke-theme-primary-400" />
        </a>
    );
}
