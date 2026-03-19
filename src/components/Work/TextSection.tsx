import { MDXFromComponent } from "@d1vij/jassm";
import { Activity, cn } from "@d1vij/shit-i-always-use";
import { useState } from "react";
import { Elements } from "@/components/MDX";
import { stylemap } from "@/content/mdx-styles/mdx.styles";
import SectionDivider from "./SectionDivider";

function Fallback() {
    return <div>Fetching...</div>;
}

export default function TextSection({
    component,
}: {
    component: React.LazyExoticComponent<React.ComponentType>;
}) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="relative">
                <div
                    className={cn(
                        "overflow-clip",
                        open ? "h-full" : "h-[90vh]",
                    )}
                >
                    <MDXFromComponent
                        source={component}
                        styles={stylemap}
                        elements={Elements}
                        fallback={<Fallback />}
                    />
                </div>
                <Activity show={!open}>
                    <button
                        type="button"
                        onClick={() => setOpen(true)}
                        className="absolute right-0 bottom-0 -mx-2 -mb-4 left-0 grid cursor-pointer bg-theme-primary/70 border-t-2 border-theme-primary-900 px-2 pt-4 pb-3  backdrop-blur"
                    >
                        Expand
                    </button>
                </Activity>
            </div>
            <SectionDivider />
        </>
    );
}
