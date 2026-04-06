type TagProps = {
    title: string;
};
function Tag({ title }: TagProps) {
    return (
        <li className="grid h-10 place-items-center border-stone-800 border-r-2 px-4">
            {title}
        </li>
    );
}

type TagsProps = {
    tags: string[];
};
export default function Tags({ tags }: TagsProps) {
    const elms = tags.map((t) => <Tag title={t} key={t} />);

    return <ul className="flex flex-wrap gap-1 overflow-clip">{elms}</ul>;
}
