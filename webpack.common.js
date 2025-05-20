const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // main JS
  output: {
    filename: 'main.js', // output bundle
    path: path.resolve(__dirname, 'dist'), // dist/
    clean: true, // clear dist/
    assetModuleFilename: 'assets/[name][ext]', // assets to dist/assets/
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html', // base HTML
      filename: 'index.html', // output HTML
    }),
  ],
  module: {
    rules: [
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] }, // CSS
      { test: /\.html$/i, loader: 'html-loader' }, // HTML
      { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource' }, // images
      { test: /\.(woff|woff2|ttf)$/i, type: 'asset/resource' }, // fonts
    ],
  },
};
