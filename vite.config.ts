import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://whoamihealay.github.io/ip-address-tracker/",
  server: {
    proxy: {
      "/api": {
        target: "https://geo.ipify.org/",
      },
    },
  },
  preview: {
    proxy: {
      "/api": {
        target: "https://geo.ipify.org/",
      },
    },
  },
  plugins: [react()],
});
