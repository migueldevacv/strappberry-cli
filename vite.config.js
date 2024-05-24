import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@admin": path.resolve(__dirname, "./src/modules/Admin"),
      "@auth": path.resolve(__dirname, "./src/modules/Auth"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      // "@utils": path.resolve(__dirname, "./src/app/utils"),
      // "@modules": path.resolve(__dirname, "./src/app/modules"),
      // "@": path.resolve(__dirname, "./src")
    },
  },
});
