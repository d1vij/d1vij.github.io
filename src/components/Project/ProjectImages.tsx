import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import type z from "zod";
import type { Icon } from "@/types";
import cn from "@/utils/cn";
import styles from "./project.module.css";
import type { ProjectImageSchema } from "./schemas";
import SectionDivider from "./SectionDivider";

type ProjectImageProps = z.infer<typeof ProjectImageSchema> & {
    z: number;
    totalImages: number;
    isActive: boolean;
};

type ProjectImagesProps = {
    images: z.infer<typeof ProjectImageSchema>[];
};

function ProjectImage(props: ProjectImageProps) {
    const ref = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const elm = ref.current;
        if (!elm) return;
        if (props.isActive) {
            elm.scrollIntoView({ behavior: "smooth", inline: "center" });
        }
    }, [props.isActive]);

    return (
        <button
            type="button"
            className={cn(
                "aspect-auto w-50 shrink-0 select-none snap-center overflow-hidden shadow shadow-theme-primary-800",
                styles.image,
                props.isActive && styles.activeImage,
            )}
        >
            <img
                ref={ref}
                alt={props.title}
                src={props.url}
                draggable={false}
                className="h-full w-full object-cover"
            />
        </button>
    );
}
export function ProjectImages({ images }: ProjectImagesProps) {
    const [activeIdx, setActiveIdx] = useState(0);

    function previousImage() {
        if (activeIdx <= 0) {
            // go to last image
            setActiveIdx(images.length - 1);
        } else {
            setActiveIdx((i) => i - 1);
        }
    }
    function nextImage() {
        if (activeIdx >= images.length - 1) {
            setActiveIdx(0);
        } else {
            setActiveIdx((i) => i + 1);
        }
    }

    if (images.length === 0) return null;

    const carouselButtons =
        images.length > 1 ? (
            <div className="grid grid-cols-2 gap-2">
                <CarouselButton BIcon={FaArrowLeft} action={previousImage} />
                <CarouselButton BIcon={FaArrowRight} action={nextImage} />
            </div>
        ) : null;

    const imageElms = images.map((image, z) => (
        <ProjectImage
            {...image}
            z={z}
            isActive={activeIdx === z}
            totalImages={images.length}
            key={image.title}
        />
    ));

    return (
        <>
            <div className={cn("relative flex flex-col items-center gap-4")}>
                <div
                    className={cn(
                        "flex h-fit w-full snap-x snap-mandatory items-center gap-2 overflow-hidden px-6 md:w-1/4",
                    )}
                >
                    {imageElms}
                </div>
                {carouselButtons}
            </div>
            <SectionDivider />
        </>
    );
}

type CarouselButtonProps = {
    BIcon: Icon;
    action: VoidFunction;
};
function CarouselButton({ BIcon, action }: CarouselButtonProps) {
    return (
        <button
            type="button"
            onClick={action}
            className={cn(
                "cursor-pointer rounded border-2 border-theme-primary-700 bg-theme-primary-900/80 p-1",
            )}
        >
            <BIcon className="h-4 w-8 fill-theme-primary-100" />
        </button>
    );
}
