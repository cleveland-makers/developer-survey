/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  resolve: {
    modules: [path.resolve('./lib'), path.resolve('./node_modules')],
    extensions: ['.js', '.jsx'],
  },
  entry: {
    vendor: [
      'babel-polyfill',
      'react',
      'react-dom',
      'prop-types',
      'axios',
      'fingerprintjs2',
      'material-ui',
    ],
    app: ['./lib/renderers/dom.js'],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      exclude: /(node_modules|__tests__)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['react', 'env', 'stage-2'],
        },
      },
    }],
  },
  plugins: [
    new CleanWebpackPlugin(['public']),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
  ],
};

module.exports = config;
