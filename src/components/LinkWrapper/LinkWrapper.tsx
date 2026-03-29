import { cn, useVibrate } from "@d1vij/shit-i-always-use";
import { Link, type LinkProps } from "@tanstack/react-router";

export default function LinkWrapper(props: LinkProps) {
    const vibrator = useVibrate();
    function handleClick() {
        vibrator(100);
    }

    return (
        <Link
            onClick={handleClick}
            className={cn(
                "text-lg tracking-wide",
                "font-semibold underline decoration-2 decoration-theme-primary-300 decoration-dotted hover:decoration-solid",
            )}
            {...props}
        />
    );
}
