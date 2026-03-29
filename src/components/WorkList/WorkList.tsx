import { cn } from "@d1vij/shit-i-always-use";
import type { WorkMetadata } from "../Work";
import WorkListItem from "./WorkListItem";
import styles from "./worklist.module.css";

type WorkListProps = {
    title: string;
    metadatas: Record<string, WorkMetadata>;
};

export default function WorkList({ metadatas, title }: WorkListProps) {
    const order = (Object.keys(metadatas) as (keyof typeof metadatas)[]).sort();
    const listElms = order.map((m) => {
        const meta = metadatas[m];
        return <WorkListItem key={m} {...meta} />;
    });

    return (
        <div>
            <h1 className="mb-5 font-semibold text-5xl uppercase tracking-tight underline decoration-2 decoration-theme-primary-400 decoration-wavy">
                {title}
            </h1>
            <div
                className={cn(
                    "relative mx-auto grid grid-cols-1 gap-5 overflow-clip border-2 border-x-theme-primary-900/60 border-y-0 md:border-x-2",
                )}
            >
                <div
                    className={cn(
                        styles.background,
                        "absolute -inset-100 -z-20",
                    )}
                ></div>
                {listElms}
            </div>
        </div>
    );
}
