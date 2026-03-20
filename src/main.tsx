import {
    createHashHistory,
    createRouter,
    RouterProvider,
} from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { routeTree } from "./routeTree.gen";

import "@/index.css";
import "@/styles/fonts.css";
import "@/tailwind.css";

import DefaultError from "@/components/DefaultError";

const hashHistory = createHashHistory();
const router = createRouter({
    routeTree,
    history: hashHistory,
    defaultErrorComponent: DefaultError,
    scrollRestoration: true,
});

// biome-ignore lint/style/noNonNullAssertion: <xplanation>
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}
