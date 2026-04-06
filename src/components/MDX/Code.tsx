import { type ElementProps, useStyles } from "@d1vij/jassm";
import { cn } from "@d1vij/shit-i-always-use";
import { useContext, useEffect } from "react";
import { LanguageContext } from "./Preformatted";

export function Code(props: ElementProps<"code">) {
    const styles = useStyles();
    const lang = /language-(\w+)/.exec(props.className || "")?.[1];
    const ctx = useContext(LanguageContext);
    useEffect(() => {
        ctx?.setLang(lang || "txt");
    }, [lang, ctx]);

    return (
        <code className={cn(styles.code, lang && `language-${lang}`)}>
            {props.children}
        </code>
    );
}
