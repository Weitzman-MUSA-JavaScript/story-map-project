import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    ignores: ["templates/**"],         // keep what you had
    languageOptions: {
      globals: {
        ...globals.browser,              // existing browser globals
        L: "readonly",                   // tell ESLint about Leaflet's global
      },
    },
  },
]);
