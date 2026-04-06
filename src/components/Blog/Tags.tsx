import { Link } from "@tanstack/react-router";

type TagProps = {
    title: string;
};
function Tag({ title }: TagProps) {
    return (
        <li>
            <Link
                className="grid w-fit place-items-center overflow-clip rounded bg-theme-primary-300 p-1 px-2 transition-colors duration-200 last-of-type:border-r-0 hover:bg-theme-secondary active:bg-theme-secondary md:px-4"
                to="/tags/$slug"
                params={{
                    slug: title,
                }}
            >
                {title}
            </Link>
        </li>
    );
}

type TagsProps = {
    tags: string[];
};
export default function Tags({ tags }: TagsProps) {
    const elms = tags.map((t) => <Tag title={t} key={t} />);
    return (
        <nav>
            <ul className="flex w-fit flex-wrap gap-1 overflow-clip">{elms}</ul>
        </nav>
    );
}
