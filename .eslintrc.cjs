module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  rules: {
    'import/extensions': 'off',
    camelcase: 'off',
    'no-restricted-globals': 'off',
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'linebreak-style': ['error', 'unix'], //ver si es necesario//
  },
  ignorePatterns: ['**/node_modules/**', '**/dist/**'],
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
};
