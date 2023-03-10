/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: ['airbnb-base', 'plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'prettier/prettier': 'warn',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/vite.config.js', '**/.eslintrc.cjs', '**/postcss.config.js'],
        optionalDependencies: false,
      },
    ],
    'no-param-reassign': ['error', { props: false }],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
      },
    },
  },
}
