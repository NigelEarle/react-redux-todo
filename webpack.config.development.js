const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config.base');

const devConfig = Object.assign({}, baseConfig);

devConfig.devtool = 'cheap-module-eval-source-map';
devConfig.entry = [
  'webpack-hot-middleware/client?reload=true',
  './client/app.js',
];

devConfig.output = {
  path: path.join(__dirname, '/build/'),
  publicPath: '/',
  filename: 'bundle.js',
};

devConfig.devServer = {
  hot: true,
  inline: true,
  contentBase: path.resolve(__dirname, 'client'),
  stats: { colors: true },
};

devConfig.module.rules.push(
  {
    test: /\.s?css$/,
    exclude: /node_modules/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
    ],
  } // eslint-disable-line
);

devConfig.plugins.push(
  new HtmlWebpackPlugin({
    template: 'client/index.ejs',
    inject: 'body',
    filename: 'index.html',
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development'),
    },
  }) // eslint-disable-line
);

module.exports = devConfig;
