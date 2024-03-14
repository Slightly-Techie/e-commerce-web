import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import path from "path"
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      components: `${path.resolve(__dirname, "./src/components/")}`,
      pages: `${path.resolve(__dirname, "./src/pages/")}`,
      services: `${path.resolve(__dirname, "./src/services/")}`,
      store: `${path.resolve(__dirname, "./src/store/")}`,
      lib: `${path.resolve(__dirname, "./src/lib/")}`,
      hooks: `${path.resolve(__dirname, "./src/hooks/")}`,
    },
  },
})
