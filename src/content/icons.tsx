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

import { Icon } from "@iconify/react";

import * as v from "valibot";

//TODO: Add icons for Seaborn, Matplotlib, TanstackRouter

/**
 * Wraps the value into a function
 */
const _ = (v: unknown) => (() => v) as React.ComponentType;

/**
 * Add new icon components here to automatically use it everywhere icons are used
 */
export const icons = {
    Github: _(<Icon icon={"octicon:mark-github-24"} />),
    // web
    React: FaReact,
    TailwindCSS: SiTailwindcss,
    TypeScript: SiTypescript,
    Express: SiExpress,
    HTML: DiHtml5,
    SCSS: FaSass,
    TanstackRouter: _(<Icon icon={"simple-icons:tanstack"} />),
    // python
    Python: FaPython,
    FastApi: SiFastapi,
    Pandas: SiPandas,
    Numpy: SiNumpy,
    Jupyter: SiJupyter,
    Docker: FaDocker,
    MongoDB: DiMongodb,
    Vite: SiVite,
    Matplotlib: _(<Icon icon="devicon-plain:matplotlib" />),
    Seaborn: _(<Icon icon="devicon-plain:seaborn" />),
} as const;
export default icons;

export const UnknownSkillSchema = v.pipe(v.string(), v.regex(/^\*.*/));

const KnownSkillSchema = v.picklist(
    Object.keys(icons) as [keyof typeof icons, ...Array<keyof typeof icons>],
);
export type KnownSkills = v.InferInput<typeof KnownSkillSchema>;

// Allowed skills are keys of either the skills objects or any string starting with a `*` for any unknown skills
export const ValidSkillsSchema = v.union([
    UnknownSkillSchema,
    KnownSkillSchema,
]);
export type ValidSkill = KnownSkills | `*${string}`;
