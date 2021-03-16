const path = require("path");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src", "index"),
  output: {
    path: path.join(__dirname, "public"),
    publicPath: "",
    filename: "bundle.js",
    chunkFilename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    inline: true,
    host: "localhost",
    port: 8080,
  },
};