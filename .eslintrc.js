module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  extends: [
    'react-app',
    'airbnb',
    'plugin:jsx-a11y/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'import/order': ['off'], // Relative imports can precede absolute ones in components
    'react/state-in-constructor': ['off'],
    'no-use-before-define': ['error', { functions: false, classes: false }],
    'import/no-cycle': ['error', { maxDepth: 1 }],
    'react/jsx-props-no-spreading': ['off'],
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
};
