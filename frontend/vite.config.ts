import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

const API_PROXY_TARGET = "http://127.0.0.1:8000";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
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
