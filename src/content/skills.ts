import { z } from "zod";
import { FaPython, FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";

const skills = {
    React: FaReact,
    TailwindCSS: SiTailwindcss,
    Python: FaPython,
} as const;

export default skills;

export const SkillsSchema = z.enum(Object.keys(skills) as [keyof typeof skills, ...Array<keyof typeof skills>]);
