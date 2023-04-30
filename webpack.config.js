// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "writer-effect.js",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env", "@babel/preset-react"] },
      },
    ],
  },
};
