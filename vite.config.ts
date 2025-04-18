/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    includeSource: ["src/**/*.{ts,tsx}", "tests/**/*.test.{ts,tsx}"],
    exclude: ["**/.trunk", "**/node_modules"],
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
  },
});
