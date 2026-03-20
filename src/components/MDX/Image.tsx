import { cn } from "@d1vij/shit-i-always-use";

type ImageProps = {
    src: string;
    alt: string;
    widthRem?: number;
    center?: boolean;
    twStyles?: string;
};

/**
 * Component for loading images in mdx
 * @example
 * <Image
 *  src="/images/apple.png"
 *  alt="image of an apple"
 * // Width of image then when the screen is post the medium breakpoint. Image is always with width 100% for small screens
 *  widthRem={20}
 * // Whether vertically center the image, default is false
 * center={true}
 * // Any additional tailwind styles to include
 * twStyles="border border-red-300"
 * />
 */
export function Image({
    alt,
    src,
    widthRem = 30,
    center,
    twStyles,
}: ImageProps) {
    return (
        <img
            alt={alt}
            src={src}
            className={cn(
                "w-full md:w-(--img-md-width)",
                center && "mx-auto",
                twStyles,
            )}
            style={
                {
                    "--img-md-width": `min(100%,${widthRem}rem)`,
                } as React.CSSProperties
            }
            loading="lazy"
        />
    );
}
