import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
    createRouter,
    RouterProvider,
    createHashHistory,
} from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

import DefaultError from "@/components/DefaultError";

const hashHistory = createHashHistory();
const router = createRouter({
    routeTree,
    history: hashHistory,
    defaultErrorComponent: DefaultError,
});

// biome-ignore lint/style/noNonNullAssertion: <xplanation>
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);

document.getElementById("loader")?.remove();

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}
