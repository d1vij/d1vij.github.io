import skills, { UnknownSkillSchema } from "@/content/skills";
import type { Icon } from "@/types";
type SkillIconProps = {
    skill: string;
};

function EmptyIcon(_: { className: string }) {
    return null;
}

export default function SkillIcons({ skill }: SkillIconProps) {
    let Icon: typeof EmptyIcon | Icon;
    if (UnknownSkillSchema.safeParse(skill).success) {
        Icon = EmptyIcon;
        skill = skill.slice(1);
    } else {
        //@ts-expect-error
        Icon = skills[skill];
    }
    return (
        <span className="flex w-fit items-center justify-center gap-1 border-2 border-theme-primary-600/50 bg-theme-primary-950 p-1 text-center d:text-sm text-theme-primary-200 text-xs">
            <Icon className="size-3.5" />
            <span>{skill}</span>
        </span>
    );
}
