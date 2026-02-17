import { FaGithub, FaLinkedinIn} from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import type { Contact } from "@/components/ContactList/ContactList";
import { nanoid } from "nanoid";
import type { Project } from "@/components/ProjectPreview/ProjectPreview";

export const contacts: Contact[] = [
    {
        id: nanoid(),
        icon: IoMailOutline,
        content: "verma.divij@gmail.com",
        href: "mailto:verma.divij@gmail.com",
    },
    {
        id: nanoid(),
        icon: IoMailOutline,
        content: "leenukhs@gmail.com (alt)",
        href: "mailto:leenukhs@gmail.com",
    },
    {
        id: nanoid(),
        icon: FaGithub,
        content: "Github",
        href: "https://github.com/d1vij",
    },
    {
        id: nanoid(),
        icon: FaLinkedinIn,
        content: "Linkedin",
        href: "https://www.linkedin.com/in/divij-verma-013993365/",
    },
] as const;

export const projects: Project[] = [
    {
        id: nanoid(),
        title: "Fullstack Dashboard",
        description: "Analytics dashboard with API backend and responsive UI.",
        links: [
            { for: "github", url: "https://github.com/user/fullstack-dashboard" },
            { for: "website", url: "https://example.com/dashboard" }
        ],
        skills: ["React", "Python", "TailwindCSS", "React", "Python", "TailwindCSS"]
    },
    {
        id: nanoid(),
        title: "Python API Service",
        description: "REST API for handling authentication and data processing.",
        links: [
            { for: "github", url: "https://github.com/user/python-api" }
        ],
        skills: ["Python"]
    },
    {
        id: nanoid(),
        title: "UI Component Library",
        description: "Reusable and responsive UI components.",
        links: [
            { for: "website", url: "https://example.com/ui-library" }
        ],
        skills: ["React", "TailwindCSS"]
    },
    {
        id: nanoid(),
        title: "Portfolio Platform",
        description: "Dynamic portfolio site powered by a Python backend.",
        links: [
            { for: "github", url: "https://github.com/user/portfolio" },
            { for: "website", url: "https://example.com/portfolio" }
        ],
        skills: ["React", "Python"]
    },
    {
        id: nanoid(),
        title: "Landing Page Builder",
        description: "Tool for generating modern landing pages quickly.",
        links: [
            { for: "github", url: "https://github.com/user/landing-builder" }
        ],
        skills: ["React", "TailwindCSS"]
    },
    {
        id: nanoid(),
        title: "Data Processing Toolkit",
        description: "Automation utilities for cleaning and transforming datasets.",
        links: [
            { for: "website", url: "https://example.com/data-toolkit" }
        ],
        skills: ["Python", "TailwindCSS"]
    },
    {
        id: nanoid(),
        title: "Minimal Blog Engine",
        description: "Simple blog platform with markdown support.",
        links: [
            { for: "github", url: "https://github.com/user/blog-engine" },
            { for: "website", url: "https://example.com/blog" }
        ],
        skills: ["React", "Python", "TailwindCSS"]
    }
] as const;
