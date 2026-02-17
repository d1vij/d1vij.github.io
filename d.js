import {nanoid} from "nanoid"
console.log(
    JSON.stringify(
        [
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
        ]
    )
)
