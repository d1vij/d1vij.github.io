import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import type { Contact } from "./components/ContactList/ContactList";
import { nanoid } from "nanoid";

export const contacts: Contact[] = [
    {
        id: nanoid(),
        icon: Mail,
        content: "verma.divij@gmail.com",
        href: "mailto:verma.divij@gmail.com",
    },
    {
        id: nanoid(),
        icon: Mail,
        content: "leenukhs@gmail.com (alt)",
        href: "mailto:leenukhs@gmail.com",
    },
    {
        id: nanoid(),
        icon: FaGithub,
        content: "Github",
        href: "https://github.com/d1vij",
    },
    {
        id: nanoid(),
        icon: FaLinkedinIn,
        content: "Linkedin",
        href: "https://www.linkedin.com/in/divij-verma-013993365/",
    },
];
