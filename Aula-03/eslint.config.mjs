import js from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: true,
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'no-unused-vars': 'warn',
      'no-console': 'off',
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'class-methods-use-this': 'off',
      'no-param-reassign': 'off',
      camelcase: 'off',
    },
  },
];
