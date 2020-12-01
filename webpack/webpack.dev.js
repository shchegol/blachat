const {merge} = require("webpack-merge");
const webpack = require("webpack");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          "resolve-url-loader",
          "sass-loader",
        ],
      },
    ],
  },
  devServer: {
    contentBase: "./build",
    port: 4000,
    historyApiFallback: {
      index: './build/index.html'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "./index.html",
      favicon: "src/favicon.ico",
    }),
  ],
});