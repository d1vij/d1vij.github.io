import skills, { UnknownSkillSchema } from "@/content/skills";
type SkillIconProps = {
    skill: string;
};

function EmptyIcon(_: { className: string }) {}

export default function SkillIcons({ skill }: SkillIconProps) {
    let Icon;
    // TODO: Maybe fix this logic, atp just hope that the json is correct
    if (UnknownSkillSchema.safeParse(skill).success) {
        Icon = EmptyIcon;
        skill = skill.slice(1);
    } else {
        //@ts-ignore
        Icon = skills[skill];
    }
    return (
        <span className="flex w-fit items-center justify-center gap-1 border-2 border-theme-primary-600/50 bg-theme-primary-950 p-1 text-center text-theme-primary-200 text-xs d:text-sm">
            <Icon className="size-3.5" />
            <span>{skill}</span>
        </span>
    );
}
