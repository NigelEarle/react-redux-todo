const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseConfig = require('./webpack.config.base');

const prodConfig = Object.assign({}, baseConfig);

prodConfig.entry = [path.join(__dirname, 'client/app.js')];

prodConfig.output = {
  path: path.join(__dirname, '/build/'),
  publicPath: '/',
  filename: 'bundle.js',
};

module.exports = prodConfig;
