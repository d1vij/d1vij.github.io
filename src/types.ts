import type { LucideIcon } from "lucide-react";
import type { IconBase } from "react-icons";
import type skills from "@/content/skills";

export type Icon = LucideIcon | typeof IconBase;

export type ValidSkill = keyof typeof skills;
