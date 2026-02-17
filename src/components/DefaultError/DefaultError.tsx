import { Link, type ErrorComponentProps } from "@tanstack/react-router";
import { useState } from "react";

export default function DefaultErrorComponent(props: ErrorComponentProps) {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className="absolute inset-0 z-30 flex size-full flex-col items-center justify-center bg-theme-primary text-center">
            <span>Something went wrong</span>
            <Link to="/">
                Go back to{" "}
                <span className="cursor-pointer underline decoration-1 hover:decoration-2 active:decoration-2">
                    Home
                </span>
            </Link>

            <button
                className="absolute bottom-0 cursor-help text-sm italic"
                onClick={() => setIsVisible(true)}
                type="button"
            >
                {isVisible ? props.error.message : "show error message"}
            </button>
        </div>
    );
}
