const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.min.js"
  },
  mode: "production",
  optimization: { minimizer: [new UglifyJsPlugin()] }
});
