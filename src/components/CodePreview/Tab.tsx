export type TabProps = {
    title: string;
    children: string;
    lang?: string;
};

import { getLongName } from "../MDX/Preformatted";

export default function Tab({ children, lang = "txt" }: TabProps) {
    const language = getLongName(lang);

    return (
        <>
            <span className="absolute top-1 right-1 rounded bg-theme-primary-800/40 p-0.5 text-xs">
                {language}
            </span>
            <pre className="overflow-scroll">
                <code className="">{children}</code>
            </pre>
        </>
    );
}
