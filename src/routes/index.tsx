import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

import styles from "./homepage.module.css";
import ContactList from "@/components/ContactList";
import PrimaryText from "@/components/PrimaryText";
import SkewmorphicButton from "@/components/SkewmorphicButton";
import { contacts } from "@/content/data";
import { Link } from "@tanstack/react-router";

function App() {
    return (
        <main className="relative z-20 flex flex-col bg-transparent">
            <div className="relative grow p-5 md:p-10">
                <div className={styles.backdrop}></div>
                <section className="relative z-20 flex w-fit flex-col items-baseline">
                    <h1 className="font-semibold text-8xl leading-tight tracking-tight md:text-9xl">
                        Divij Verma
                    </h1>

                    <h6 className="w-full px-4 text-secondary text-sm italic md:px-8 md:text-base">
                        Student, Developer
                    </h6>
                </section>
            </div>

            <div className="p-5">
                <section className="mt-10 md:mt-20 md:text-xl">
                    <PrimaryText>
                        Majorly working with web technologies and python along
                        with occasional C and Go,
                    </PrimaryText>
                    <PrimaryText>Interested in OSS and Linux.</PrimaryText>
                    <ContactList contacts={contacts} />
                </section>

                <section className="justify-baseline mt-12 flex w-full bg-theme-primary md:px-5">
                    <Link to="/projects">
                        <SkewmorphicButton>View Projects</SkewmorphicButton>
                    </Link>
                </section>
            </div>
        </main>
    );
}
