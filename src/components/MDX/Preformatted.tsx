import type { ElementProps } from "@d1vij/jassm";
import { useStyles } from "@d1vij/jassm";
import {
    cn,
    type StateSetterFunction,
    useClipboardText,
} from "@d1vij/shit-i-always-use";
import { title } from "radashi";
import { createContext, useRef, useState } from "react";

const languageMap = {
    ts: "TypeScript",
    py: "Python",
    js: "JavaScript",
    md: "Markdown",
    txt: "PlainText",
} as const;

/**
 * Returns titlecased full name of a language from its short name / extension
 */
export function getLongName(short: string): string {
    return languageMap[short as keyof typeof languageMap] ?? title(short);
}

export function Preformatted(props: ElementProps<"pre">) {
    const styles = useStyles();
    const [lang, setLang] = useState("plaintext");

    const preRef = useRef<HTMLPreElement>(null);
    const clipboard = useClipboardText();

    async function handleClick() {
        const elm = preRef.current;
        if (elm === null) return;
        await clipboard.copy(elm.innerText);
    }

    return (
        <LanguageContext value={{ lang, setLang }}>
            <div
                className={cn(
                    "flex items-center justify-between",
                    "p-1 text-theme-primary-400 text-xs",
                    "rounded-t-md border-2 border-theme-primary-800 border-b-0",
                )}
            >
                <span>{getLongName(lang)}</span>
                <button
                    onClick={handleClick}
                    className={cn(
                        "rounded bg-theme-primary-900/50 p-1 hover:bg-theme-primary-900/70 active:bg-theme-primary-900/70",
                        // "outline-2 outline-theme-primary-800/70 hover:outline-theme-primary-800 active:outline-theme-primary-800",
                        "transition-all duration-200 ease-out",
                        "cursor-pointer",
                    )}
                    title="Copy to clipboard"
                    type="button"
                >
                    Copy
                </button>
            </div>
            <pre ref={preRef} className={cn(styles.preformatted)}>
                {props.children}
            </pre>
        </LanguageContext>
    );
}

type LanguageContext = {
    lang: string;
    setLang: StateSetterFunction<LanguageContext["lang"]>;
};

//TODO: think of some better way to get language without using context
export const LanguageContext = createContext<LanguageContext | null>(null);
