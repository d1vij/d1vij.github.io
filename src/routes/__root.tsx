import {
    createRootRoute,
    HeadContent,
    Link,
    Outlet,
} from "@tanstack/react-router";

export const Route = createRootRoute({
    component: RootComponent,
});

function RootComponent() {
    return (
        <>
            <HeadContent />
            <div className="grow">
                <Outlet />
            </div>
            <footer className="left-0 z-20 w-full pb-2 text-center text-sm decoration-2 brightness-50">
                <Link
                    to="/"
                    className="underline decoration-dotted hover:decoration-solid"
                >
                    Home
                </Link>
            </footer>
        </>
    );
}
