const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseConfig = require('./webpack.config.base');

const prodConfig = Object.assign({}, baseConfig);

prodConfig.entry.push(path.join(__dirname, 'client/app.js'));

prodConfig.output = {
  path: path.join(__dirname, '/build/'),
  publicPath: '/',
  filename: 'bundle.js',
};

prodConfig.modules.rules.push(
  {
    test: /\.s?css$/,
    exclude: /node_modules/,
    loader: ExtractTextPlugin.extract({
      fallbackLoader: 'style-loader',
      loader: [
        'css-loader',
        'sass-loader',
        'postcss-loader',
      ],
    }),
  }
);

prodConfig.plugins.push(
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.optimize.OccurenceOrderPlugin(true),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
  }),
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'client', 'index.ejs'),
    inject: 'body',
    filename: 'index.html',
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true,
    },
  }),
  new ExtractTextPlugin({
    filename: 'style.css',
    allChunks: true,
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  })
);

module.exports = prodConfig;
