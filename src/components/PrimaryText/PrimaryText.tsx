type PrimaryTextProps = {
    children: string;
};
export default function PrimaryText({ children }: PrimaryTextProps) {
    return <p className="mb-4">{children}</p>;
}
