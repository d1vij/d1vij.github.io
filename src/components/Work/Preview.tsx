import { cn } from "@d1vij/shit-i-always-use";
import { useState } from "react";

export default function Preview({ link }: { link: string | undefined }) {
    const [show, setShow] = useState(false);
    if (!link) return null;

    if (show) {
        return (
            <iframe
                title={link}
                className="h-[90vh] w-full overflow-scroll bg-transparent"
                src={link}
            />
        );
    } else {
        return (
            <div className="group relative grid h-[90vh] w-full place-content-center">
                <button
                    type="button"
                    className="peer relative z-20 cursor-pointer bg-theme-primary/40 p-2 ring-2 ring-theme-primary-900"
                    onClick={() => setShow(true)}
                >
                    Load Preview
                </button>
                <div
                    className={cn(
                        "bg-[linear-gradient(to_right,var(--color-theme-primary-800),transparent_1px),linear-gradient(to_bottom,var(--color-theme-primary-800)_1px,transparent_1px)] bg-size-[14px_24px]",
                        "absolute inset-0 shadow-theme-primary-800 blur-[3px] transition-all peer-hover:blur-xs",
                    )}
                ></div>
            </div>
        );
    }
}
