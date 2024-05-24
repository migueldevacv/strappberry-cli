import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@env": path.resolve(__dirname, "./src/env"),
      "@admin": path.resolve(__dirname, "./src/modules/Admin"),
      "@client": path.resolve(__dirname, "./src/modules/Client"),
      "@auth": path.resolve(__dirname, "./src/modules/Auth"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@core": path.resolve(__dirname, "./src/core"),
      "@services": path.resolve(__dirname, "./src/services"),
      // "@utils": path.resolve(__dirname, "./src/app/utils"),
      // "@modules": path.resolve(__dirname, "./src/app/modules"),
      // "@": path.resolve(__dirname, "./src")
    },
  },
});
