module.exports = {
  entry: "./src/js/app.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.ttf$/,
        loaders: ["url-loader"]
      },
      {
        test: /\.(svg|gif|png|eot|woff|ttf)$/,
        use: ["file-loader"]
      }
    ]
  }
};
