import { useVibrate } from "@/hooks";
import type { Icon } from "@/types";
import z from "zod";

const ContactSchema = z.object({
    id: z.string(),
    content: z.string(),
    href: z.url(),
    icon: z.custom<Icon>(),
});
export type Contact = z.infer<typeof ContactSchema>;
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
            <c.icon className="size-4 fill-theme-primary-400 stroke-theme-primary-400 md:size-6" />
            <a
                href={c.href}
                target="_blank"
                onClick={() => vibrator(50)}
                className={`text-theme-primary-400 decoration-2 hover:text-theme-primary-200 hover:underline active:underline`}
            >
                {c.content}
            </a>
        </li>
    ));

    return <ul className="mt-8">{elms}</ul>;
}
