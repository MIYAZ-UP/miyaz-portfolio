// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const site = process.env.miyazup || process.env.SITE_URL;

export default defineConfig({
	site,
	output: "static",
	integrations: site ? [sitemap()] : [],
	vite: {
		plugins: [tailwindcss()],
	},
	build: {
		inlineStylesheets: "auto",
	},
	compressHTML: true,
});
