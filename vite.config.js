import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Site-ul e servit de GitHub Pages la https://constantyn-silvian.github.io/about-me/
  base: "/about-me/",
  // GitHub Pages publică folderul `docs/` de pe branch-ul main
  build: {
    outDir: "docs",
  },
});
