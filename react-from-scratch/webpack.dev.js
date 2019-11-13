const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-module-eavl-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public")
  }
});
