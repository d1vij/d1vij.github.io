const { FaGithub, FaLinkedinIn } = await import("react-icons/fa");
const { IoMailOutline } = await import("react-icons/io5");

import type { Contact } from "@/components/ContactList/ContactList";

export const contacts: Contact[] = [
    {
        icon: IoMailOutline,
        content: "verma.divij@gmail.com",
        href: "mailto:verma.divij@gmail.com",
    },
    {
        icon: IoMailOutline,
        content: "leenukhs@gmail.com(alt)",
        href: "mailto:leenukhs@gmail.com",
    },
    {
        icon: FaGithub,
        content: "Github",
        href: "https://github.com/d1vij",
    },
    {
        icon: FaLinkedinIn,
        content: "Linkedin",
        href: "https://www.linkedin.com/in/divij-verma-013993365/",
    },
] as const;
