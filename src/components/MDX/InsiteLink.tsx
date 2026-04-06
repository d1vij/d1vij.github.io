import { useStyles } from "@d1vij/jassm";
import { Link, type LinkProps } from "@tanstack/react-router";

export function InsiteLink(props: LinkProps) {
    const styles = useStyles();
    return (
        <Link {...props} className={styles.anchor}>
            {props.children}
        </Link>
    );
}
