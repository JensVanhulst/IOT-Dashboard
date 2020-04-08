//npm install -D prettier prettier-eslint eslint-plugin-prettier eslint-config-prettier
module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ['google', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'prettier/prettier': 'error',
  },
  plugins: ['prettier'],
};