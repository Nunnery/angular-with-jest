const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

const ManifestPlugin = require('webpack-manifest-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const cssRule = {
  test: /\.(css|scss)$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      'css-loader',
      'sass-loader',
      'postcss-loader',
    ],
  }),
};

module.exports = function(env) {
  return merge(common(env, cssRule), {
    devtool: 'hidden-source-map',
    plugins: [
      new webpack.optimize.UglifyJsPlugin(),
      new ManifestPlugin(),
      new ExtractTextPlugin('index-[contenthash].css'),
    ],
    output: {
      filename: '[name]-[chunkhash].js',
      path: path.resolve(process.cwd(), 'dist'),
    },
  });
};
