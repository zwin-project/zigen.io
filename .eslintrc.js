module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'prettier'],
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'prettier/prettier': ['error'],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['@mui/material/*'],
        paths: ['@mui/icons-material'],
      },
    ],
  },
}
