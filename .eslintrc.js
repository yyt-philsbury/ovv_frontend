module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'no-relative-import-paths',
    'simple-import-sort',
    'unused-imports',
    'mui-path-imports',
  ],
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'no-console': 'off',

    // NO FORMATTING RELATED ERRORS, we use prettier for formatting
    'no-relative-import-paths/no-relative-import-paths': [
      'error',
      { allowSameFolder: false },
    ],
    'mui-path-imports/mui-path-imports': 'error',

    // https://mui.com/material-ui/guides/minimizing-bundle-size/
    // "Be aware that we only support first and second-level imports.
    // Anything deeper is considered private and can cause issues,
    // such as module duplication in your bundle."
    //
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['@mui/*/*/*'],
            message:
              'For @mui, cannot import more than second level. Refer to .eslintrc.js for more details',
          },
        ],
      },
    ],

    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-parameter-properties': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
};
