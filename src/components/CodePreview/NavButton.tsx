import { useContext } from "react";
import { cn } from "tailwind-variants";
import { ActiveTabContext } from "./CodePreview";

type NavButtonProps = {
    idx: number;
    title: string;
};

export default function NavButton({ idx, title }: NavButtonProps) {
    const ctx = useContext(ActiveTabContext);
    if (!ctx) throw new Error("No context provider present at parent");
    const { activeTab, setActiveTab } = ctx;

    const isActive = activeTab === idx;
    return (
        <button
            className={cn(
                "cursor-pointer rounded-md border border-theme-primary-800 p-1 transition-colors duration-200",
                isActive
                    ? "bg-theme-primary-900"
                    : "hover:bg-theme-primary-900/50",
            )}
            type="button"
            onClick={() => setActiveTab(idx)}
        >
            {title}
        </button>
    );
}
