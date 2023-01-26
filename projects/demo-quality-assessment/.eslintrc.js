module.exports = {
  ignorePatterns: ['.eslintrc.js'],

  globals: {
    JSX: true,
  },

  env: {
    browser: true,
    es2021: true,
  },

  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/jsx-runtime',
    'prettier',
  ],

  plugins: ['react', '@typescript-eslint', 'prettier'],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },

  rules: {
    'prettier/prettier': [
      'error',
      {
        'endOfLine': 'auto',
      }
    ],
    'react-hooks/exhaustive-deps': 'warn',
    'import/prefer-default-export': 'off',
    'react/jsx-runtime': 'off',
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'arrow-function',
      },
    ],
    'import/extensions': 'off',
    'func-names': ['error', 'as-needed'],
    'no-multi-assign': ['error', { ignoreNonDeclaration: true }],

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'react/require-default-props': [2, { ignoreFunctionalComponents: true }],

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],

    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': ['error'],

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],

    '@typescript-eslint/no-floating-promises': 'warn',
  },
};
