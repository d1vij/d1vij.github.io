import { createFileRoute } from "@tanstack/react-router";
import { lazy } from "react";
export const Route = createFileRoute("/work/")({
    component: lazy(() => import("@/components/WorkIndex")),
    head: () => ({
        meta: [{ title: "Work | Divij Verma" }],
    }),
});
