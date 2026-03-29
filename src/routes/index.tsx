import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
    component: App,
    head: () => ({
        meta: [
            {
                title: "Portfolio | Divij Verma",
            },
        ],
    }),
});

import ContactList from "@/components/ContactList";
import LinkWrapper from "@/components/LinkWrapper";
import PrimaryText from "@/components/PrimaryText";
import { contacts } from "@/content/data";
import styles from "./homepage.module.css";

function App() {
    return (
        <main className="relative z-20 bg-transparent">
            <div className="relative p-5 px-4! md:p-10">
                <div className={styles.backdrop}></div>
                <section className="relative z-20 flex flex-col content-container content-container md:mx-auto">
                    <h1 className="text-start text-8xl uppercase leading-tighter tracking-tighter md:text-9xl">
                        Divij Verma
                    </h1>

                    <h6 className="w-full px-4 text-secondary text-sm text-theme-primary-400 italic md:px-8 md:text-base">
                        Student, Developer
                    </h6>
                </section>
            </div>

            <div className="mx-auto overflow-clip p-5 px-0 content-container content-width">
                <nav className="flex w-full justify-start gap-4 bg-theme-primary">
                    <LinkWrapper to={"/work"}>Work</LinkWrapper>
                    <LinkWrapper to={"/blogs"}>Blogs</LinkWrapper>
                </nav>
                <section className="mt-5 text-lg md:mt-5 md:text-xl">
                    {/*<PrimaryText>{"<WIP>"}</PrimaryText>*/}
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
            </div>
        </main>
    );
}
