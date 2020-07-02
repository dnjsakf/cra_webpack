var webpack = require("webpack");
var path = require("path");
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    "app": path.join(__dirname, "js/index.js"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "dist"),
    publicPath: "/public/",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].bundle.css",
    }),
    new HtmlWebpackPlugin({
      template: 'a.html'
    }),
  ],
  // Loaders
  module: {
    rules: [
      {
        test: [/\.css$/],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ],
      }
    ]
  },
  devServer: {
    host: "localhost",
    port: 4000,
    hot: true,
    open: true,
    contentBase: path.join(__dirname, "dist"),
    publicPath: "/public/",
    historyApiFallback: true,
  },
}