const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
  mode: 'production', // minify/optimize
  devtool: 'source-map', // prod maps
  optimization: {
    minimizer: ['...', new CssMinimizerPlugin()], // minify CSS
  },
});
