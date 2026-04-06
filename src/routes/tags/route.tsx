import { createFileRoute } from "@tanstack/react-router";
import { lazy } from "react";

export const Route = createFileRoute("/tags")({
    component: lazy(() => import("@/components/GoBackLayout")),
});
