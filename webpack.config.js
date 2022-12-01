const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  entry: {
    popup: path.resolve("./src/popup/popup.tsx"),
  },
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.ts$|tsx/,
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader", // Creates style nodes from JS strings
          },
          {
            loader: "css-loader", // Translates CSS into CommonJS
          },
          {
            loader: "sass-loader", // Compiles Sass to CSS
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader", // Creates style nodes from JS strings
          },
          {
            loader: "css-loader", // Translates CSS into CommonJS
          },
          {
            loader: "less-loader", // compiles Less to CSS
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.resolve("src/manifest.json"), to: path.resolve("dist") },
        {
          from: path.resolve("src/favicons/favicon-16x16.png"),
          to: path.resolve("dist"),
        },
        {
          from: path.resolve("src/favicons/favicon-48x48.png"),
          to: path.resolve("dist"),
        },
        {
          from: path.resolve("src/favicons/favicon-150x150.png"),
          to: path.resolve("dist"),
        },
        {
          from: path.resolve("src/images/chameleon-logo-withtext.png"),
          to: path.resolve("dist/images/chameleon-logo-withtext.png"),
        },
      ],
    }),
    new HtmlPlugin({
      title: "Chameleon Bookmarks",
      filename: "popup.html",
      chunks: ["popup"],
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
  },
};
