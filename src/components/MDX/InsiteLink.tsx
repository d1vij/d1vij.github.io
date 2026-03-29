import { Link, type LinkProps } from "@tanstack/react-router";
import { stylemap } from "@/content/mdx-styles/mdx.styles";

export function InsiteLink(props: LinkProps) {
    return (
        <Link {...props} className={stylemap.anchor}>
            {props.children}
        </Link>
    );
}
