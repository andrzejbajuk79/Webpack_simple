const path = require("path");
module.exports = {
 entry: "./project/index.js",
 output: {
  path: path.resolve(__dirname, "build"),
  filename: "bundle.js",
  publicPath: "build/"
 },
 module: {
  rules: [
   {
    use: "babel-loader",
    test: /\.(js|jsx)$/,
    exclude: /node_modules/
   },
   {
    test: /\.s?css$/,
    use: [
     { loader: "style-loader/url" },
     {
      loader: "file-loader",
      options: {
       name: "[name].[ext]"
      }
     }
    ]
   }
  ]
 }
};
