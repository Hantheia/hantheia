// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  base: "/",
  devToolbar: {
    enabled: false
  },
  site: "https://hantheia.fr",
  server: { port: 3000 },
});
