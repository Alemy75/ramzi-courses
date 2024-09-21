import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import vue from "@vitejs/plugin-vue";

const API_PROXY_TARGET = "http://127.0.0.1:8000";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  server: {
    proxy: {
      "/api": {
        target: API_PROXY_TARGET,
        changeOrigin: true,
        headers: {
          Origin: API_PROXY_TARGET
        }
      }
    }
  }
});
