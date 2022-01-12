module.exports = {
  parserOptions: {
    sourceType: "module",
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: ["eslint-config-tui", "prettier"], // ESLint 규칙으로 Prettier를 실행할 수 있음 // 뒤에 선언된 규칙이 우선순위가 높다.
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};
