const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const util = require('./webpack.utils');

module.exports = {
  entry: {
    main: util.resolve('src/index.ts'),
  },
  output: {
    filename: '[name].[contenthash].js',
    path: util.resolve('dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@root': util.resolve('src'),
      '@components': util.resolve('src/components'),
      '@pages': util.resolve('src/pages'),
      '@router': util.resolve('src/router'),
      '@store': util.resolve('src/store'),
      '@utils': util.resolve('src/utils'),
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images/',
              name: '[name][contenthash].[ext]',
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
              name: '[name][contenthash].[ext]',
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
              name: '[name][contenthash].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ['gifsicle', { interlaced: true }],
          ['jpegtran', { progressive: true }],
          ['optipng', { optimizationLevel: 5 }],
          [
            'svgo',
            {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            },
          ],
        ],
      },
    }),
  ],
};
