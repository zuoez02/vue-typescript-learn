'use strict';
// This is the webpack config used for unit tests.

const utils = require('./utils');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const SourceMapDevToolPlugin = require('webpack/lib/SourceMapDevToolPlugin');

const webpackConfig = merge(baseWebpackConfig, {
  // use inline sourcemap for karma-sourcemap-loader
  module: {
    rules: utils.styleLoaders(),
  },
  devtool: 'inline-source-map',
  resolveLoader: {
    alias: {
      // necessary to to make lang="scss" work in test when using vue-loader's ?inject option
      // see discussion at https://github.com/vuejs/vue-loader/issues/724
      'scss-loader': 'sass-loader',
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/test.env'),
    }),
    new SourceMapDevToolPlugin({
      filename: null,
      test: /\.(ts|js)($|\?)/i,
    }),
  ],
});

webpackConfig.module.rules[1].query = {
  compilerOptions: {
    inlineSourceMap: true,
    sourceMap: false,
  },
};

webpackConfig.module.rules.push({
  test: /\.ts$/,
  enforce: 'post',
  loader: 'istanbul-instrumenter-loader',
  exclude: ['node_modules', /\.spec\.ts$/],
  query: {
    esModules: true,
  },
});

// no need for app entry during tests
delete webpackConfig.entry;

module.exports = webpackConfig;
