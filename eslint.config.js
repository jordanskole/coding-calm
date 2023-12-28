import stylistic from "@stylistic/eslint-plugin"
import react from "eslint-plugin-react"

const defaults = stylistic.configs.customize({
  indent: 2,
  quotes: "double",
  semi: false,
  jsx: true,
})

export default [
  defaults,
  {
    rules: {
      "@stylistic/jsx-one-expression-per-line": ["error", { allow: "none" }],
      "@stylistic/jsx-indent": ["error", 2],
      "@stylistic/jsx-max-props-per-line": ["error", { maximum: 2, when: "always" }],
      "@stylistic/jsx-closing-bracket-location": "error",
    },
  },
]
