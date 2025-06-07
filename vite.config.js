import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ mode }) => {
  // Obtener el directorio raíz del proyecto usando import.meta.url
  const rootDir = new URL('.', import.meta.url).pathname;
  const env = loadEnv(mode, rootDir);

  return {
    base: env.VITE_BASE_URL || '/',
    plugins: [react()],
    build: {
      outDir: "/var/www/html/iagenedu/i-jornada/",
      emptyOutDir: true,
    },
  };
});
