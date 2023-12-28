import stylistic from "@stylistic/eslint-plugin"
import nextPlugin from "@next/eslint-plugin-next"

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
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
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
