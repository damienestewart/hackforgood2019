module.exports = {
  presets: [
    "react-app",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread",
    "@babel/plugin-syntax-dynamic-import"
  ]
};