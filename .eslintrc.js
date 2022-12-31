module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'prettier/@typescript-eslint',
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'standard-with-typescript',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
