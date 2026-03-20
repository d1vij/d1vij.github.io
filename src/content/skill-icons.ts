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
    SiVite,
} = await import("react-icons/si");

import * as v from "valibot";

//TODO: Add icons for Seaborn, Matplotlib, TanstackRouter

export const skills = {
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
    Vite: SiVite,
} as const;
export default skills;
export const UnknownSkillSchema = v.pipe(v.string(), v.regex(/^\*.*/));

const KnownSkillSchema = v.picklist(
    Object.keys(skills) as [keyof typeof skills, ...Array<keyof typeof skills>],
);
export type KnownSkills = v.InferInput<typeof KnownSkillSchema>;

// Allowed skills are keys of either the skills objects or any string starting with a `*` for any unknown skills
export const ValidSkillsSchema = v.union([
    UnknownSkillSchema,
    KnownSkillSchema,
]);
export type ValidSkill = KnownSkills | `*${string}`;
