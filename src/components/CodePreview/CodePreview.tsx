import {
    cn,
    // useClipboardText,
    type StateSetterFunction,
    useClipboardText,
} from "@d1vij/shit-i-always-use";
import { Copy, CopyCheck, CopyMinus, CopyXIcon } from "lucide-react";
import { createContext, useCallback, useMemo, useRef, useState } from "react";
import { Tab } from "@/components/CodePreview";
import type { Icon } from "@/types";
import NavButton from "./NavButton";
import type { TabProps } from "./Tab";

type ActiveTabContext = {
    activeTab: number;
    setActiveTab: StateSetterFunction<number>;
};
export const ActiveTabContext = createContext<ActiveTabContext | null>(null);

type CodePreviewProps = {
    children: React.ReactElement<TabProps>[];
};

const SCROLL_UNITS = 100; //px

export default function CodePreview({ children }: CodePreviewProps) {
    const tabButtonContainerRef = useRef<HTMLDivElement>(null);
    const tabRef = useRef<HTMLDivElement>(null);

    const [activeTab, setActiveTab] = useState(0);
    const { copy, status } = useClipboardText();

    const tabs = useMemo(
        () => children.filter((c) => c.type === Tab),
        [children],
    );

    const tabButtons = useMemo(
        () =>
            tabs.map((c, idx) => (
                <NavButton
                    key={c.props.title}
                    idx={idx}
                    title={c.props.title}
                />
            )),
        [tabs],
    );

    const actionButtonStyles = cn(
        "text-theme-primary-400 cursor-pointer  hover:text-theme-primary-200 transition-colors duration-200",
    );

    const scrollLeft = useCallback(() => {
        const elm = tabButtonContainerRef.current;
        if (!elm) return;

        elm.scrollBy(-SCROLL_UNITS, 0);
    }, []);
    const scrollRight = useCallback(() => {
        const elm = tabButtonContainerRef.current;
        if (!elm) return;
        elm.scrollBy(SCROLL_UNITS, 0);
    }, []);

    const copyToClipboard = useCallback(async () => {
        const elm = tabRef.current;
        if (!elm) return;
        await copy(elm.innerText);
    }, [copy]);

    const loadedTab = tabs[activeTab];

    let CopyIcon: Icon;
    if (status === "success") {
        CopyIcon = CopyCheck;
    } else if (status === "copying") {
        CopyIcon = CopyMinus;
    } else if (status === "error") {
        CopyIcon = CopyXIcon;
    } else {
        CopyIcon = Copy;
    }

    return (
        <ActiveTabContext value={{ setActiveTab, activeTab }}>
            <div className="relative my-4 rounded-md border-2 border-theme-primary-800 bg-theme-primary-800/20">
                {/*Scroll buttons*/}
                <div className="absolute top-0 right-2 flex -translate-y-full items-center gap-2 text-lg">
                    <button
                        type="button"
                        title="Scroll Left"
                        className={actionButtonStyles}
                        onClick={scrollLeft}
                    >
                        ⟵
                    </button>
                    <button
                        type="button"
                        title="Scroll Right"
                        className={actionButtonStyles}
                        onClick={scrollRight}
                    >
                        ⟶
                    </button>
                    <button
                        onClick={copyToClipboard}
                        type="button"
                        className={cn(actionButtonStyles)}
                    >
                        <CopyIcon
                            className={cn(
                                "z-20 size-4 cursor-pointer",
                                status === "error" && "stroke-[orangered]",
                            )}
                        />
                    </button>
                </div>

                <section
                    ref={tabButtonContainerRef}
                    className="relative flex items-center gap-1 overflow-scroll border-theme-primary-800 border-b p-1"
                >
                    {tabButtons}
                </section>
                <div className="relative p-3" ref={tabRef}>
                    {loadedTab}
                </div>
            </div>
        </ActiveTabContext>
    );
}
