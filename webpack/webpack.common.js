const CopyPlugin = require('copy-webpack-plugin');
const util = require('./webpack.utils');

module.exports = {
  // entry: './src/index.ts',
  output: {
    path: util.resolve('build'),
    filename: 'bundle-[hash].js'
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    alias: {
      '@': util.resolve('src'),
    },
  },
  module: {
    rules: [
      // {
      //   test: /\.ts$/,
      //   enforce: 'pre',
      //   loader: 'tslint-loader',
      //   options: {/* Loader options go here */}
      // },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images/',
              name: '[name][hash].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 80,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
              gifsicle: {
                optimizationLevel: 7,
                interlaced: false,
              },
            },
          },
        ],
      },
      {
        test: /\.(svg)$/,
        exclude: util.resolve('src/fonts'),
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'svg/',
              name: '[name][hash].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              svgo: {
                plugins: [
                  {removeViewBox: false},
                  {removeEmptyAttrs: false},
                ],
              },
            },
          },
        ],
      },
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        exclude: util.resolve('src/svg'),
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts/',
              name: '[name][hash].[ext]',
            },
          },
        ],
      },
    ],
  },

  // plugins: [
  //   new CopyPlugin([
  //     {
  //       from: 'src/static',
  //       to: 'static',
  //     },
  //   ]),
  // ],
};