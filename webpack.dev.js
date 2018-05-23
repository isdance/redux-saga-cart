const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

const DIST_DIR = path.join(__dirname, 'public');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    contentBase: DIST_DIR,
    hot: true,
    historyApiFallback: true
  }
});