const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
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
          // {
          //   loader: 'style-loader',
          //   options: {
          //     sourceMap: true
          //   },
          // },
          // {
          //   loader: 'css-loader',
          //   options: {
          //     sourceMap: true
          //   },
          // },
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     sourceMap: true,
          //     // plugins: [
          //     //   require('autoprefixer')({
          //     //     browsers: ['last 2 versions'],
          //     //   }),
          //     // ],
          //   },
          // },
          // {
          //   loader: 'resolve-url-loader',
          //   options: {
          //     sourceMap: true,
          //   }
          // },
          // {
          //   loader: 'sass-loader',
          //   options: {
          //     sourceMap: true,
          //   },
          // },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/favicon.ico',
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 4000,
    compress: true,
    // open: true,
  },
});