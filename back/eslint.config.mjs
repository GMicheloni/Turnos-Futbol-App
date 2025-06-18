import eslint from '@eslint/js'
import * as tseslint from 'typescript-eslint'
import prettierPlugin from 'eslint-plugin-prettier'

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended.flat(),
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'prettier/prettier': ['error', { semi: false, endOfLine: 'auto' }],
    },
  },
]
