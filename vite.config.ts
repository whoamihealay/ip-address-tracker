import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://ip-address-tracker-whoamihealay.netlify.app/",
  server: {
    proxy: {
      "/api": {
        target: "https://geo.ipify.org/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  plugins: [react()],
});
