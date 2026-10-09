import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
  build: {
    // Smaller chunks — split vendor libraries into separate files
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React — cached separately
          "vendor-react": ["react", "react-dom"],
          // Framer Motion — heavy, split out so it can be cached
          "vendor-framer": ["framer-motion"],
          // Icons — split out to avoid bundling unused ones
          "vendor-icons": ["lucide-react", "react-icons"],
          // Misc utility libs
          "vendor-misc": ["date-fns", "react-xarrows"],
        },
      },
    },
    // Inline small assets (< 4 KB) directly into JS/CSS
    assetsInlineLimit: 4096,
    // Use esbuild for faster, smaller minification
    minify: "esbuild",
    // Generate source maps only in development
    sourcemap: false,
    // Warn if any chunk exceeds 600 KB
    chunkSizeWarningLimit: 600,
  },
  // Aggressive dep pre-bundling for faster HMR
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "framer-motion",
      "lucide-react",
      "react-icons/fa6",
      "react-icons/si",
      "react-icons/fa",
      "date-fns",
      "react-xarrows",
    ],
  },
});
