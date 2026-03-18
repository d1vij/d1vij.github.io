import type { ElementProps, HeaderLevels } from "@d1vij/jassm";
import { useStyles } from "@d1vij/jassm";
import type { JSX } from "@d1vij/shit-i-always-use";
import { cn, useClipboardText } from "@d1vij/shit-i-always-use";
import { useRouter, useSearch } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";

// maybe some onclick action can be defined as custom prop or function while loading it client side
export function Header(
    props: ElementProps<`h${HeaderLevels}`> & {
        // holy fuck typescript
        level: HeaderLevels;
    },
): JSX {
    const styles = useStyles();
    const headerRef = useRef<HTMLButtonElement>(null);

    const [hash, setHash] = useState("");
    const { copy } = useClipboardText();
    const { focus } = useSearch({ strict: false });

    const router = useRouter();
    const selfLocation = useMemo(() => {
        const location = router.buildLocation({
            to: ".",
            search: { focus: hash },
        });

        // NOTE: If we ever in future use non hash
        // based routing remove the hash from here
        return `${window.origin}/#${location.href}`;
    }, [router, hash]);

    useEffect(() => {
        if (focus === hash) {
            headerRef.current?.scrollIntoView();
        }
    }, [focus, hash]);

    async function handleClick() {
        await copy(selfLocation);
    }

    useEffect(() => {
        if (!headerRef.current) return;

        const raw = headerRef.current.textContent ?? "";

        const safe = raw
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, "") // remove illegal chars
            .trim()
            .replace(/\s+/g, "-")
            .slice(0, 30);

        setHash(safe);
    }, []);

    // const H = `h${props.level}` as unknown as JSX;
    return (
        <h1 className={cn(styles.header, styles[`header_${props.level}`])}>
            <button
                onClick={() => void handleClick()} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void
                ref={headerRef}
                id={hash}
                className={cn(styles.header_button)}
                type="button"
            >
                {props.children}
            </button>
        </h1>
    );
}
