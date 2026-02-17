import SkillIcons from "@/components/SkillIcons";
import type { ValidSkill } from "@/types";
type ProjectPreviewProps = {
    title: string;
    description: string;
    skills: ValidSkill[];
};

export default function ProjectPreview({
    title,
    description,
    skills,
}: ProjectPreviewProps) {
    const icons = skills.map((s) => <SkillIcons key={s} skill={s} />);
    return (
        <div className="border border-x-0 border-y-theme-primary-800 p-2">
            <h1 className="mb-2 font-semibold text-2xl">{title}</h1>
            <p className="mb-2 text-sm text-theme-primary-400">{description}</p>
            <div className="flex gap-1">{icons}</div>
        </div>
    );
}
