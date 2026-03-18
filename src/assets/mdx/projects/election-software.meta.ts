import { generateProjectMetadata } from "@/components/Project";

export default generateProjectMetadata({
    id: "election-software",
    title: "Election Software",
    description: "A fullstack application for secure vote ",
    stack: [
        "FastApi",
        "Express",
        "TypeScript",
        "Python",
        "*Matplotlib",
        "*Seaborn",
        "Docker",
        "MongoDB",
    ],
    links: {
        github: "https://github.com/d1vij/electionsoftware",
    },
});
