import { generateWorkMetadata } from "@/components/Work";

export default generateWorkMetadata({
    id: "election-software",
    title: "Election Software",
    description:
        "A secure fullstack voting application used in elections with 1000+ total voters.",
    stack: [
        "FastApi",
        "Express",
        "TypeScript",
        "Python",
        "Matplotlib",
        "Seaborn",
        "Docker",
        "MongoDB",
    ],
    links: {
        github: "https://github.com/d1vij/electionsoftware",
    },
});
