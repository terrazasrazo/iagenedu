import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/i-jornada/',
  plugins: [
    react(),
  ],
  build: {
    outDir: "/var/www/html/iagenedu/i-jornada/",
    emptyOutDir: true
  }
});
