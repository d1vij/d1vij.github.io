
import { useVibrate } from "@/hooks";
import type { Icon } from "@/types";

export type Contact = {
    id: string;
    icon: Icon;
    content: string;
    href: string;
};
type ContactListProps = {
    contacts: Contact[];
};
export default function ContactList({ contacts }: ContactListProps) {
    const vibrator = useVibrate();

    const elms = contacts.map((c) => (
        <li
            key={c.id}
            className="justify-baseline flex items-center gap-2 text-md"
        >
            <c.icon className="size-4 md:size-6" />
            <a
                href={c.href}
                target="_blank"
                onClick={() => vibrator(50)}
                className={`decoration-2 hover:underline active:underline`}
            >
                {c.content}
            </a>
        </li>
    ));

    return <ul className="mt-8">{elms}</ul>;
}
