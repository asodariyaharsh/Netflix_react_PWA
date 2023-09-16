const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const Dotenv = require("dotenv-webpack");
const { InjectManifest } = require("workbox-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const webpackPlugins = [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "public/index.html"),
    filename: "index.html",
  }),
  new Dotenv({
    path: "./.env",
    systemvars: true,
  }),
  new CopyPlugin({
    patterns: [
      {
        from: "./src/favicon.ico",
        to: "",
      },
      {
        from: "./src/manifest.json",
        to: "",
      },
      {
        from: "./src/logo192.png",
        to: "",
      },
      {
        from: "./src/logo512.png",
        to: "",
      },
    ],
  }),
];

if (process.env.NODE_ENV === "production") {
  webpackPlugins.push(
    new InjectManifest({
      swSrc: "./src/service-worker.js",
      swDest: "sw.js",
    })
  );
}

module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
      {
        test: /\.css?$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|j?g|gif|svg)?$/,
        use: "file-loader?name=images/[name].[ext]",
      },
    ],
  },
  plugins: webpackPlugins,
};
