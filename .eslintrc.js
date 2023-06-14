module.exports = {
  root: true,
  extends: [
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
  ],
  parserOptions: {
    project: './tsconfig.json'
  }
};
