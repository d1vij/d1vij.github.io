import { useVibrate } from "@/hooks";
import styles from "./skewmorphicbutton.module.css";

type SkewmorphicButtonProps = {
    children: string;
    action?: VoidFunction;
};
export default function SkewmorphicButton({
    action,
    children,
}: SkewmorphicButtonProps) {
    const vibrator = useVibrate();
    function handleClick() {
        action?.();
        vibrator(100);
    }

    return (
        <button
            type="button"
            onClick={handleClick}
            className={`${styles.skButton} cursor-pointer p-3 md:text-xl`}
        >
            {children}
        </button>
    );
}
