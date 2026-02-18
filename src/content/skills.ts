const { DiHtml5, DiMongodb } = await import("react-icons/di");
const { FaDocker, FaSass } = await import("react-icons/fa");
const { FaPython, FaReact } = await import("react-icons/fa6");
const {
    SiExpress,
    SiFastapi,
    SiJupyter,
    SiNumpy,
    SiPandas,
    SiTailwindcss,
    SiTypescript,
} = await import("react-icons/si");
import { z } from "zod";

//TODO: Add icons for Seaborn, Matplotlib, TanstackRouter

const skills = {
    // web
    React: FaReact,
    TailwindCSS: SiTailwindcss,
    TypeScript: SiTypescript,
    Express: SiExpress,
    HTML: DiHtml5,
    SCSS: FaSass,
    // python
    Python: FaPython,
    FastApi: SiFastapi,
    Pandas: SiPandas,
    Numpy: SiNumpy,
    Jupyter: SiJupyter,
    Docker: FaDocker,
    MongoDB: DiMongodb,
} as const;
export default skills;
export const UnknownSkillSchema = z.string().regex(/^\*.*/);

const KnownSkillSchema = z.enum(
    Object.keys(skills) as [keyof typeof skills, ...Array<keyof typeof skills>],
);

// Allowed skills are keys of either the skills objects or any string starting with a `*` for any unknown skills
export const ValidSkillsSchema = z.union([
    UnknownSkillSchema,
    KnownSkillSchema,
]);
