import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/iagenedu/',
  plugins: [
    react(),
    VitePWA({
      manifest: {
        icons: [
          {
            src: "512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      },
      workbox: {
        runtimeCaching: [{
          urlPattern: ({ url }) => {
            return url.pathname.startsWith("/api");
          },
          handler: "CacheFirst",
          options: {
            cacheName: "api-cache",
            cacheableResponse: {
              statuses: [0, 200]
            },
          }
        }]
      }
    })
  ],
  build: {
    outDir: "/var/www/html/iagenedu/",
    emptyOutDir: true
  }
});
