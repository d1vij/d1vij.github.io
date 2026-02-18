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
            className="cursor-pointer flex justify-center items-center md:text-xl text-center border-theme-primary-800/80 p-1 decoration-2 decoration-dotted underline hover:decoration-solid decoration-theme-primary-300"
            {...props}
        />
    );
}
