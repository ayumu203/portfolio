import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react/react-in-jsx-scope": "off", 
      "jsx-a11y/alt-text": "warn", 
      "jsx-a11y/anchor-is-valid": "warn", 
      "no-console": ["warn", { allow: ["warn", "error"] }], 
      "import/no-anonymous-default-export": "warn", 
      "react/jsx-key": "error", 
      "react/prop-types": "off", 
      "@next/next/no-img-element": "error", 
      "@next/next/no-html-link-for-pages": "off", 
      },
  },
];

export default eslintConfig;
