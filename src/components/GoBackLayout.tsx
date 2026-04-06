import { Link, Outlet } from "@tanstack/react-router";
import { ArrowUpLeft } from "lucide-react";

export default function GoBackLayout() {
    return (
        <div className="relative mx-auto mt-4 mb-6 space-y-4 content-container">
            <Link
                to=".."
                className="group relative mb-2 flex items-center justify-start gap-1"
            >
                <ArrowUpLeft className="group-hover:-translate-0.5 -left-6 size-4 transition-transform duration-100 md:absolute" />
                Go back
            </Link>
            <Outlet />
        </div>
    );
}
