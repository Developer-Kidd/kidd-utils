/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/eslint-config-typescript", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: "latest"
  },
  rules: {
    // eslint (http://eslint.cn/docs/rules)
    "prefer-const": "off", // 使用 let 关键字声明但在初始分配后从未重新分配的变量，要求使用 const
    "no-use-before-define": "off", // 禁止在 函数/类/变量 定义之前使用它们
    "no-unused-vars": "off",
    "no-empty": "off",
    "no-debugger": "off",
    // eslint (http://eslint.cn/docs/rules)
    "@typescript-eslint/no-unused-vars": "off", // 禁止定义未使用的变量
    "@typescript-eslint/no-explicit-any": "off", // 禁止使用 any 类型

    // vue (https://eslint.vuejs.org/rules)
    "vue/multi-word-component-names": "off" // 要求组件名称始终为 “-” 链接的单词
  }
};
