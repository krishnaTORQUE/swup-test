import swup from "@swup/astro";
// import SwupParallelPlugin from "@swup/parallel-plugin";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    integrations: [
        swup({
            debug: true,
            theme: "fade",
            preload: true,
            // parallel: true,
            loadOnIdle: true,
            accessibility: true,
            globalInstance: true,
            smoothScrolling: true,
            animateHistoryBrowsing: true,
            requestHeaders: { Accept: "*/*" },
            containers: ["main"],
            // parallel: ["main"],
            // plugins: [new SwupParallelPlugin()],
        }),
    ],
});
