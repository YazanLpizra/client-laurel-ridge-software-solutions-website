import { defineConfig } from "astro/config";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
    site: "https://www.yourwebsite.com", // update me!
    integrations: [icon(), sitemap()],
});
