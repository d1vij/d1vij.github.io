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
    css: {
        devSourcemap: true,
    },
    server: {
        host: true,
        allowedHosts: true
    },
    build: {
        minify: true,
        target:"esnext",
        rolldownOptions: {
            optimization: {
                inlineConst: true
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
        tailwindcss({
            optimize: {
                minify: true
            }
        }),
        tanstackRouter({
            autoCodeSplitting: true,
        }),
        react({
            babel: {
                compact:true,
                plugins: [["babel-plugin-react-compiler"]],
            },
        }),
        visualizer({
            open: false,
            filename:"dist/stats.html"
        }),
    ],
});
