const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

const cssRule = {
  test: /\.(css|scss)$/,
  use: [
    'style-loader',
    'css-loader',
    'sass-loader',
    'postcss-loader',
  ],
};

module.exports = function(env) {
  return merge(common(env, cssRule), {
    devtool: 'eval-source-map',
    devServer: {
      contentBase: './dist',
      stats: 'minimal'
    },
    output: {
      filename: '[name].js',
      path: path.resolve(process.cwd(), 'dist'),
    },
  });
};
