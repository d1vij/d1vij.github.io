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
            <div className="relative grid h-[90vh] w-full place-content-center">
                <div
                    className={cn(
                        "bg-[linear-gradient(to_right,var(--color-theme-primary-800),transparent_1px),linear-gradient(to_bottom,var(--color-theme-primary-800)_1px,transparent_1px)] bg-size-[14px_24px]",
                        "shadowlg absolute inset-0 bg-theme-rimary-900 shadow-theme-primary-800 blur-[3px]",
                    )}
                ></div>
                <button
                    type="button"
                    className="relative z-20 cursor-pointer bg-theme-primary-800/40 p-2 ring-2 ring-theme-primary-800 hover:ring-theme-primary-700"
                    onClick={() => setShow(true)}
                >
                    Load Preview
                </button>
            </div>
        );
    }
}
