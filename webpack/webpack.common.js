const CopyPlugin = require("copy-webpack-plugin");
const util = require("./webpack.utils");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "bundle-[hash].js",
    path: util.resolve("dist"),
    publicPath: "/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": util.resolve("src"),
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
        loader: "babel-loader",
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.pug$/,
        loader: "pug-loader",
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images/",
              name: "[name][hash].[ext]",
            },
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 80,
              },
              pngquant: {
                quality: "65-90",
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
        exclude: util.resolve("src/fonts"),
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "svg/",
              name: "[name][hash].[ext]",
            },
          },
          {
            loader: "image-webpack-loader",
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
        exclude: util.resolve("src/svg"),
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "fonts/",
              name: "[name][hash].[ext]",
            },
          },
        ],
      },
    ],
  },
};