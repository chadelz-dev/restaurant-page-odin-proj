const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development', // fast builds
  devtool: 'eval-source-map', // debug maps
  devServer: {
    static: path.join(__dirname, 'dist'), // serve dist/
    port: 8080, // port 8080
    open: true, // open browser
    hot: true, //  live reload
    watchFiles: ['src/**/*'], // watch src/
  },
});
