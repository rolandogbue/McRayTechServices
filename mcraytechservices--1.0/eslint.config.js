import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
	// Ignore build output and configuration files
	globalIgnores(["dist", "node_modules", "build", ".vite", "*.config.*"]),

	{
		files: ["**/*.{ts,tsx}"],

		// Extend recommended sets for JS, TS, React, and Vite environments
		extends: [
			js.configs.recommended,
			...tseslint.configs.recommended,
			reactHooks.configs["recommended-latest"],
			reactRefresh.configs.vite,
		],

		languageOptions: {
			ecmaVersion: 2020,
			sourceType: "module",
			globals: globals.browser,
		},

		plugins: {
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
		},

		rules: {
			// React Fast Refresh safety
			"react-refresh/only-export-components": [
				"warn",
				{ allowConstantExport: true },
			],

			// Allow unused vars during development (you can switch to 'warn' in production)
			"@typescript-eslint/no-unused-vars": "off",

			// Hooks best practices
			...reactHooks.configs["recommended-latest"].rules,

			// Code quality
			"no-console": "off", // Allow console logs during dev
			"no-debugger": "warn",
			"no-undef": "error",
		},
	},
]);
