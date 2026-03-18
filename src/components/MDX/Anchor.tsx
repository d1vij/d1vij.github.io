import type { ElementProps } from "@d1vij/jassm";
import { cn } from "@d1vij/shit-i-always-use";
import { useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { stylemap } from "@/content/mdx-styles/mdx.styles";

export function Anchor(props: ElementProps<"a">) {
    const selfOrigin = useMemo(
        () => new URL(window.location.href).origin.toString(),
        [],
    );
    const [target] = useState<"_self" | "_blank">(() => {
        const href = props.href;

        if (href?.match(/^#.*/)) {
            return "_self";
        }
        const targetOrigin = new URL(props.href ?? "").origin.toString();
        return targetOrigin === selfOrigin ? "_self" : "_blank";
    });

    const navigate = useNavigate();

    function handleSelfClick() {
        navigate({
            to: ".",
            search: {
                focus: props.href?.slice(1),
            },
        });
    }

    if (target === "_self") {
        return (
            <button
                className={cn(stylemap.anchor, "cursor-pointer")}
                type="button"
                onClick={handleSelfClick}
            >
                {props.children}
            </button>
        );
    } else
        return (
            <a
                className={stylemap.anchor}
                href={props.href}
                target="_blank"
                rel="noopener"
            >
                {props.children}
            </a>
        );
}
