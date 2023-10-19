import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://mayocca.github.io",
  base: "/ci-cd-starter",
  integrations: [tailwind()],
});
