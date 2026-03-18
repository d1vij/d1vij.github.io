const { FaGithub, FaLinkedinIn } = await import("react-icons/fa");
const { IoMailOutline } = await import("react-icons/io5");

import { getId } from "@d1vij/shit-i-always-use";
import type { Contact } from "@/components/ContactList/ContactList";

export const contacts: Contact[] = [
    {
        id: getId(),
        icon: IoMailOutline,
        content: "verma.divij@gmail.com",
        href: "mailto:verma.divij@gmail.com",
    },
    {
        id: getId(),
        icon: IoMailOutline,
        content: "leenukhs@gmail.com (alt)",
        href: "mailto:leenukhs@gmail.com",
    },
    {
        id: getId(),
        icon: FaGithub,
        content: "Github",
        href: "https://github.com/d1vij",
    },
    {
        id: getId(),
        icon: FaLinkedinIn,
        content: "Linkedin",
        href: "https://www.linkedin.com/in/divij-verma-013993365/",
    },
] as const;
