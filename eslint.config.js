import stylistic from "@stylistic/eslint-plugin"
import nextPlugin from "@next/eslint-plugin-next"
import reactPlugin from "eslint-plugin-react"
import hooksPlugin from "eslint-plugin-react-hooks"

const defaults = stylistic.configs.customize({
  indent: 2,
  quotes: "double",
  semi: false,
  jsx: true,
})

export default [
  defaults,
  {
    plugins: {
      react: reactPlugin,
    },
    rules: {
      ...reactPlugin.configs["jsx-runtime"].rules,
    },
    settings: {
      react: {
        version: "detect", // You can add this if you get a warning about the React version when you lint
      },
    },
  },
  {
    plugins: {
      "react-hooks": hooksPlugin,
    },
    rules: hooksPlugin.configs.recommended.rules,
  },
  {
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
  {
    ignores: [".next/*"],
  },
  {
    rules: {
      "@stylistic/jsx-one-expression-per-line": ["error", { allow: "none" }],
      "@stylistic/jsx-indent": ["error", 2],
      "@stylistic/jsx-max-props-per-line": ["error", { maximum: 2, when: "always" }],
      "@stylistic/jsx-closing-bracket-location": "error",
    },
  },
]
