const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');
const util = require('./webpack.utils');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    autoprefixer,
                  ],
                ],
              },
            },
          },
          'resolve-url-loader',
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    // publicPath: '/',
    contentBase: './build',
    port: 4000,
    historyApiFallback: {
      index: './build/index.html',
    },
    // compress: true,
    // watchContentBase: true,
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: './index.html',
      favicon: 'src/favicon.ico',
    }),
  ],
});
