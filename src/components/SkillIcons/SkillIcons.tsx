import skills from "@/content/skills";
import type { ValidSkill } from "@/types";
type SkillIconProps = {
    skill: ValidSkill;
};

export default function SkillIcons({ skill }: SkillIconProps) {
    const Icon = skills[skill];
    return (
        <span className="flex w-fit items-center justify-center gap-1 border-2 border-theme-primary-600/50 bg-theme-primary-950 p-1 text-center text-theme-primary-200 text-xs d:text-sm">
            <Icon className="size-3.5" />
            <span>{skill}</span>
        </span>
    );
}
