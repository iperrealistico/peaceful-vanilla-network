import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    assetsDir: "assets/build",
    sourcemap: true,
    rollupOptions: {
      input: "app.html"
    }
  }
});
