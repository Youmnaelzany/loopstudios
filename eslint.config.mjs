import nextConfig from "eslint-config-next";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";
import pkg from "eslint/use-at-your-own-risk";

export default defineConfig([
  // Next.js config
  ...nextConfig,

  // Global ignores
  { ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"] },

  // Prettier config
  prettierConfig,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prefer-arrow-callback": "error",
      "prefer-template": "error",
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "prettier/prettier": "error",
    },
  },
]);
