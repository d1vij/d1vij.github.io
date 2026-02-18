import { useVibrate } from "@/hooks";
import { Link, type LinkProps } from "@tanstack/react-router";

export default function LinkWrapper(props: LinkProps) {
    const vibrator = useVibrate();
    function handleClick() {
        vibrator(100);
    }

    return (
        <Link
            onClick={handleClick}
            className="flex cursor-pointer items-center justify-center border-theme-primary-800/80 p-1 text-center underline decoration-2 decoration-theme-primary-300 decoration-dotted hover:decoration-solid md:text-xl"
            {...props}
        />
    );
}
