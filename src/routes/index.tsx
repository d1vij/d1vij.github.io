import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
    component: App,
    head: () => ({
        meta: [
            {
                title: "Divij Verma",
            },
        ],
    }),
});

import styles from "./homepage.module.css";
import ContactList from "@/components/ContactList";
import PrimaryText from "@/components/PrimaryText";
import { contacts } from "@/content/data";
import LinkWrapper from "@/components/LinkWrapper";

function App() {
    return (
        <main className="relative z-20 flex flex-col bg-transparent">
            <div className="relative grow p-5 md:p-10">
                <div className={styles.backdrop}></div>
                <section className="relative z-20 flex lg:w-1/2 md:w-[80%] md:mx-auto flex-col items-baseline">
                    <h1 className="font-semibold text-8xl leading-tight tracking-tight md:text-9xl">
                        Divij Verma
                    </h1>

                    <h6 className="w-full px-4 text-secondary text-sm italic md:px-8 md:text-base text-theme-primary-400">
                        Student, Developer
                    </h6>
                </section>
            </div>

            <div className="p-5 lg:w-[50%] md:w-[80%] mx-auto">
                <section className="mt-10 md:mt-20 md:text-xl">
                    <PrimaryText>
                        I mostly work with web technologies and python and am
                        currently learning C and Go.
                    </PrimaryText>
                    <PrimaryText>
                        Majorly working with web technologies and python along
                        with occasional C and Go,
                    </PrimaryText>
                    <PrimaryText>Interested in OSS and Linux.</PrimaryText>
                    <ContactList contacts={contacts} />
                </section>

                <section className="justify-baseline mt-12 w-fit bg-theme-primary grid grid-cols-2">
                    <LinkWrapper to={"/projects"}>Projects</LinkWrapper>
                    <LinkWrapper to={"/work"}>Work Experience</LinkWrapper>
                </section>
            </div>
        </main>
    );
}
