const path = require('path');

const baseConfig = {
  module: {
    rules: [
      {
        test: /\.js?x$/,
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
  },
  resolve: {},
  plugins: [],
};

module.exports = baseConfig;
