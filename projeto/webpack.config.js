const webpack = require("webpack");
const path = require("path");
const package = require("./package.json");
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  devtool: 'inline-source-map',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build",)
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new CopyWebpackPlugin(
      {
        patterns: [
          {
            from: 'public',
            to: './'
          }
        ]
      }
    ),
    new webpack.DefinePlugin(
      {
        "process.env": JSON.stringify(process.env),
        "process.env.PUBLIC_URL": JSON.stringify(package.homepage)
      }
    )
  ],
  devServer: {
    open: true,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, './public')
    }
  }
};
