import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://geo.ipify.org",
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});
