import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 4001,
    proxy: {
      "/api" : {
        target: "http://localhost:5100",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
});
