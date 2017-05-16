const webpack = require('webpack');
const path = require('path');

const config = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'react-hot-loader',
        ],
      },
      {
        test: /\.(otf|woff|woff2|eot|ttf)/,
        exclude: /node_modules/,
        use: [
          'url-loader',
        ],
      },
    ],
  },
  output: {
    path: path.join(__dirname, '/build/'),
    fileName: 'bundle.js',
    publicPath: '/',
  },
  resolve: {},
  plugins: [],
};

module.exports = config;
