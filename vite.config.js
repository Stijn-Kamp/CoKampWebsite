import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

const __dirname = path.dirname("./src");

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~": path.dirname("./src"),
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@views": path.resolve(__dirname, "./src/views"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
    extensions: ["cjs", ".js", ".vue", ".json"],
  },
  plugins: [vue()],
});
