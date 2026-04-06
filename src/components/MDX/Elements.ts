import { type ElementProps, generateElementsFrom } from "@d1vij/jassm";
import {
    Anchor,
    Code,
    Header,
    Image,
    InsiteLink,
    Preformatted,
    Underline,
} from "@/components/MDX";

export const Elements = generateElementsFrom(
    {
        Image,
        InsiteLink,
        Underline,
        a: Anchor,
        pre: Preformatted,
        code: Code,
        h1: (props: ElementProps<"h1">) => Header({ ...props, level: 1 }),
        h2: (props: ElementProps<"h1">) => Header({ ...props, level: 2 }),
        h3: (props: ElementProps<"h1">) => Header({ ...props, level: 3 }),
        h4: (props: ElementProps<"h1">) => Header({ ...props, level: 4 }),
        h5: (props: ElementProps<"h1">) => Header({ ...props, level: 5 }),
        h6: (props: ElementProps<"h1">) => Header({ ...props, level: 6 }),
    },
    true,
);
