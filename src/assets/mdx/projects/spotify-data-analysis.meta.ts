import { generateProjectMetadata } from "@/components/Project";
export default generateProjectMetadata({
    id: "spotify-data-analysis",
    description:
        "A quantitative analysis of spotify listening history using pandas and matplotlib for data visualizations",
    title: "Spotify Data Analysis",
    links: {
        github: "http://github.com/d1vij/spotify-data-analysis",
        website: "https://d1vij.github.io/spotify-data-analysis/",
    },
    stack: ["Python", "Pandas", "Numpy", "*Matplotlib", "*Seaborn", "Jupyter"],
});
