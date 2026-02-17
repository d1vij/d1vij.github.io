import ProjectPreview from "@/components/ProjectPreview";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div className="p-5">
            <div className="grid grid-cols-1 gap-5 border border-x-theme-primary-800 border-y-0">
                <ProjectPreview
                    title="AI Powered Code Assistant"
                    description="A smart development assistant that analyzes code, suggests improvements, detects bugs, and provides inline documentation using advanced language models and contextual project understanding."
                    skills={["Python", "React", "TailwindCSS"]}
                />

                <ProjectPreview
                    title="Realtime Chat Application Platform"
                    description="A fast and scalable chat platform with rooms, private messaging, typing indicators, and live presence tracking using modern web technologies and optimized backend services."
                    skills={["Python", "React", "TailwindCSS"]}
                />

                <ProjectPreview
                    title="Minimal Developer Portfolio"
                    description="A sleek personal portfolio website built with a focus on performance, clean UI, responsive layouts, and smooth transitions for showcasing projects and skills."
                    skills={["Python", "React"]}
                />

                <ProjectPreview
                    title="Task Automation Dashboard"
                    description="A web-based automation tool that allows users to schedule scripts, monitor execution logs, and manage recurring workflows with a modern dashboard interface."
                    skills={["Python", "React"]}
                />

                <ProjectPreview
                    title="Data Visualization Toolkit"
                    description="An interactive analytics dashboard that transforms raw data into charts and insights with filtering, real-time updates, and customizable visual components."
                    skills={["Python", "React", "TailwindCSS"]}
                />
            </div>
        </div>
    );
}
