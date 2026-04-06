import type { ElementProps } from "@d1vij/jassm";
import { useStyles } from "@d1vij/jassm";
import { cn } from "@d1vij/shit-i-always-use";
export default function Preformatted(props: ElementProps<"pre">) {
    const styles = useStyles();

    return <pre className={cn(styles.preformatted)}>{props.children}</pre>;
}
