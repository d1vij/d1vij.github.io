import { tv, type VariantProps } from "tailwind-variants";

const underline = tv({
    base: "decoration-2 underline decoration-theme-primary-200",
    variants: {
        style: {
            solid: "decoration-solid",
            dotted: "decoration-dotted",
            wavy: "decoration-wavy",
            double: "decoration-double",
        },
    },
    defaultVariants: {
        style: "solid",
    },
});

type UnderlineProps = {
    style: VariantProps<typeof underline>["style"];
    children: string;
};

export function Underline({ style, children }: UnderlineProps) {
    return <span className={underline({ style })}>{children}</span>;
}
