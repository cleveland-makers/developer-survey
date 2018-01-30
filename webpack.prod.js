/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
});
