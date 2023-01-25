import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: false,
  },
  resolve: {
    alias: {
      // '@': resolve(__dirname, './src'),
      apis: resolve(__dirname, "./src/apis"),
      assets: resolve(__dirname, "./src/assets"),
      components: resolve(__dirname, "./src/components"),
      layouts: resolve(__dirname, "./src/layouts"),
      pages: resolve(__dirname, "./src/pages"),
      utils: resolve(__dirname, "./src/utils"),
    },
  },
  plugins: [react()],
});
