import {
    createRootRoute,
    Outlet,
    HeadContent,
    Link,
} from "@tanstack/react-router";

export const Route = createRootRoute({
    component: RootComponent,
    head: () => ({
        links: [
            {
                "rel": "icon",
                href:"/asterisk.svg"
            }
        ]
    })
});

function RootComponent() {
    return (
        <>
            <HeadContent />
            <div className="grow">
                <Outlet />
            </div>
            <footer className="left-0 z-20 mt-20 mb-2 w-full text-center text-sm decoration-2 brightness-50">
                <a
                    href="https://github.com/d1vij/d1vij"
                    target="_blank"
                    rel="noopener"
                    className="hover:underline active:underline"
                >
                    source
                </a>
                <Link to="/">Home</Link>
            </footer>
        </>
    );
}
