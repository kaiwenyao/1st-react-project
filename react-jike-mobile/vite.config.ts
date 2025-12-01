import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from 'path' // 1. 引入 path 模块

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
