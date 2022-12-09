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
    background: path.resolve("./src/background.ts"),
    options: path.resolve("./src/options/options.tsx"),
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
          from: path.resolve("src/icons/"),
          to: path.resolve("dist/icons/"),
        },
        {
          from: path.resolve("src/scripts/axios.min.js"),
          to: path.resolve("dist/src/scripts/axios.min.js"),
        },
        {
          from: path.resolve("src/scripts/lodash.min.js"),
          to: path.resolve("dist/src/scripts/lodash.min.js"),
        },
        {
          from: path.resolve("src/scripts/moment.min.js"),
          to: path.resolve("dist/src/scripts/moment.min.js"),
        },
      ],
    }),
    ...getHtmlPlugins(["options"]),
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

function getHtmlPlugins(chunks) {
  return chunks.map(
    (chunk) =>
      new HtmlPlugin({
        title: "Chameleon Extension",
        filename: `${chunk}.html`,
        chunks: [chunk],
      })
  );
}
