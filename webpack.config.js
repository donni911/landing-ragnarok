const HtmlWebpackPlugin = require("html-webpack-plugin")
const { type } = require("os")
const path = require("path")

module.exports = {
  mode: "development",
  entry: {
    app: "./src/assets/js/index.js",
  },
  output: {
    clean: true,
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: "./src",
    compress: true,
    port: 9000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "God of War",
      template: "src/index.html",
    }),
  ],

  resolve: {
    alias: {
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@js": path.resolve(__dirname, "src/assets/js"),
      "@styles": path.resolve(__dirname, "src/assets/styles"),
    },
  },
}
