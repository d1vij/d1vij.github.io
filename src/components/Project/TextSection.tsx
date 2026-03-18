import { MDXFromComponent } from "@d1vij/jassm";
import { Activity, cn } from "@d1vij/shit-i-always-use";
import { useState } from "react";
import { Elements } from "@/components/MDX";
import { stylemap } from "@/content/mdx-styles/mdx.styles";
import SectionDivider from "./SectionDivider";

function Fallback() {
    return <div>Loading</div>;
}

export default function TextSection({
    component,
}: {
    component: React.LazyExoticComponent<React.ComponentType>;
}) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div>
                <div
                    className={cn(
                        "overflow-clip",
                        open ? "h-full" : "max-h-[90vh]",
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
                    <div className="place-items-center-safe mt-4 mb-2 grid w-full">
                        <button
                            type="button"
                            onClick={() => setOpen(true)}
                            className="w-fit cursor-pointer px-2 ring-2 ring-theme-primary-800 hover:ring-theme-primary-700"
                        >
                            Expand
                        </button>
                    </div>
                </Activity>
            </div>
            <SectionDivider />
        </>
    );
}
