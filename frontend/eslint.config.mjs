import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import tseslint from "typescript-eslint";

const OFF = 0;
const WARN = 1;
const ERROR = 2;

export default tseslint.config([
  // Global ignores
  {
    ignores: [
      "dist",
      "node_modules",
      "*.config.js",
      "*.config.ts",
      "*.config.mjs",
    ],
  },

  // Base configuration
  js.configs.recommended,

  // TypeScript configuration
  {
    files: ["**/*.{ts,tsx}"],
    extends: [...tseslint.configs.recommended],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
    },
  },

  // React configuration
  {
    files: ["**/*.{jsx,tsx}"],
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "jsx-a11y": jsxA11y,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      // React Refresh
      "react-refresh/only-export-components": [
        WARN,
        { allowConstantExport: true },
      ],

      // React rules
      "react/prop-types": OFF, // Using TypeScript for prop validation
      "react/react-in-jsx-scope": OFF, // Not needed with new JSX transform
      "react/jsx-uses-react": OFF, // Not needed with new JSX transform

      // React hooks
      ...reactHooks.configs.recommended.rules,

      // JSX a11y
      "jsx-a11y/alt-text": ERROR,
      "jsx-a11y/anchor-has-content": ERROR,
      "jsx-a11y/anchor-is-valid": ERROR,
      "jsx-a11y/click-events-have-key-events": ERROR,
      "jsx-a11y/heading-has-content": ERROR,
      "jsx-a11y/img-redundant-alt": ERROR,
      "jsx-a11y/label-has-associated-control": ERROR,
      "jsx-a11y/no-autofocus": ERROR,
      "jsx-a11y/role-has-required-aria-props": ERROR,
    },
  },

  // Import and code quality configuration
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      import: importPlugin,
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
    },
    rules: {
      // Import organization and grouping
      "simple-import-sort/imports": [
        ERROR,
        {
          groups: [
            // Side effect imports first
            ["^\\u0000"],
            // Node.js builtins
            ["^node:"],
            // External packages
            ["^@?\\w"],
            // Internal packages (adjust based on your project structure)
            ["^(@|components|utils|hooks|types|constants)(/.*|$)"],
            // Parent imports
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
            // Other relative imports (same folder)
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
            // Style imports
            ["^.+\\.s?css$"],
          ],
        },
      ],
      "simple-import-sort/exports": ERROR,

      // Import gap (blank line between import groups)
      "import/newline-after-import": [ERROR, { count: 2 }],
      "import/no-duplicates": ERROR,
      "import/no-unresolved": OFF, // TypeScript handles this
      "import/order": OFF, // Using simple-import-sort instead

      // Remove unused imports
      "unused-imports/no-unused-imports": ERROR,
      "unused-imports/no-unused-vars": [
        WARN,
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      // Max line length (120 characters)
      "max-len": [
        ERROR,
        {
          code: 120,
          tabWidth: 2,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
        },
      ],

      // Spacing in brackets and other formatting
      "array-bracket-spacing": [ERROR, "never"],
      "object-curly-spacing": [ERROR, "always"],
      "computed-property-spacing": [ERROR, "never"],
      "space-in-parens": [ERROR, "never"],
      "template-curly-spacing": [ERROR, "never"],

      // General formatting
      indent: [ERROR, 2],
      quotes: [ERROR, "double", { avoidEscape: true }],
      semi: [ERROR, "always"],
      "comma-dangle": [ERROR, "always-multiline"],
      "no-trailing-spaces": ERROR,
      "eol-last": [ERROR, "always"],

      // Code quality
      // "no-console": [WARN, { allow: [WARN, ERROR] }],
      "no-debugger": ERROR,
      "no-duplicate-imports": ERROR,
      "no-unused-vars": OFF, // Using unused-imports plugin instead
      "prefer-const": ERROR,
      "no-var": ERROR,

      // TypeScript specific
      "@typescript-eslint/no-unused-vars": OFF, // Using unused-imports plugin
      "@typescript-eslint/consistent-type-imports": [
        ERROR,
        { prefer: "type-imports" },
      ],
      "@typescript-eslint/no-explicit-any": WARN,
    },
  },

  // Test files configuration
  {
    files: ["**/*.test.{js,jsx,ts,tsx}", "**/*.spec.{js,jsx,ts,tsx}"],
    rules: {
      "@typescript-eslint/no-explicit-any": OFF,
      "no-console": OFF,
    },
  },
]);
