module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'react/jsx-filename-extension': [0],
    'no-underscore-dangle': [2, { allow: ['_id'] }],
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'no-unused-expressions': ['error', { allowTernary: true }],
    'arrow-body-style': ['error', 'as-needed'],
  },
};
