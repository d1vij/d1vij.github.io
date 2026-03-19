import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { tanstackRouter } from "@tanstack/router-vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";
import path from "node:path";
import mdxplugin from "@d1vij/jassm/plugin"

// https://vite.dev/config/
export default defineConfig({
    base: "/",
    server: {
        host: true,
        allowedHosts: true
    },
    build: {
        minify: false,
        target:"esnext",
        rolldownOptions: {
            optimization: {
                inlineConst: {mode:"all", pass: 1}
            }
        }
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    plugins: [
        mdxplugin(),
        visualizer({
            open: false,
            filename:"dist/stats.html"
        }),
        tailwindcss(),
        tanstackRouter({
            autoCodeSplitting: true,
        }),
        react({
            babel: {
                plugins: [["babel-plugin-react-compiler"]],
            },
        }),
    ],
});
