import { useVibrate } from "@d1vij/shit-i-always-use";
import { Link, useRouter } from "@tanstack/react-router";
import { AppWindow, Info } from "lucide-react";
import * as v from "valibot";
import SkillIcons from "@/components/SkillIcons";
import icons from "@/content/icons";
import type { Icon } from "@/types";
import type { WorkMetadata } from "../Work/schemas";

const LinkIconSchema = v.object({
    for: v.picklist(["github", "website", "__internal"]),
    url: v.string(),
});
type LinkIconType = v.InferInput<typeof LinkIconSchema>;

type WorkListItemProps = WorkMetadata;

export default function WorkListItem({
    description,
    links,
    stack,
    title,
    id,
}: WorkListItemProps) {
    const router = useRouter();
    const location = router.buildLocation({
        to: "/work/$id",
        params: {
            id: id,
        },
    }).href;

    const linkIcons = [
        <LinkIcon for="__internal" key={"__internal"} url={location} />,
        ...Object.keys(links).map((l) => {
            const k = l as LinkIconType["for"];
            return (
                <LinkIcon
                    key={k}
                    for={k}
                    url={links[k as keyof typeof links]}
                />
            );
        }),
    ];
    const skillIcons = stack.map((s) => <SkillIcons key={s} skill={s} />);
    return (
        <div className="flex justify-between gap-1 border-2 border-x-0 border-y-theme-primary-900/60 bg-theme-primary p-3 md:border-y-2">
            {/* links */}
            <div className="">
                <Link
                    className="font-semibold text-2xl underline decoration-theme-primary-400/60 decoration-dotted hover:decoration-solid md:text-3xl md:decoration-3"
                    to={`/work/$id`}
                    params={{ id: id }}
                >
                    {title}
                </Link>
                <p className="mt-2 mb-2 w-[90%] text-sm text-theme-primary-400 md:mb-3 md:text-base">
                    {description}
                </p>
                <div className="flex flex-wrap gap-1 md:gap-2">
                    {skillIcons}
                </div>
            </div>
            <div className="flex flex-col gap-1 md:flex-row-reverse">
                {linkIcons}
            </div>
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
            Icon = icons.Github;
            break;
        case "website":
            Icon = AppWindow;
            break;
        case "__internal":
            Icon = Info;
            break;
        default:
            props.for satisfies never;
            return;
    }

    return (
        <Link
            onClick={handleClick}
            to={props.url}
            target={props.for !== "__internal" ? "_blank" : "_self"}
            className="cursor-pointer"
            rel="noopener"
        >
            <Icon className="size-5.5 stroke-theme-primary-400 md:size-4.5" />
        </Link>
    );
}
