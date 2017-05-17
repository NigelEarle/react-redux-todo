const path = require('path');

const baseConfig = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'client'),
        use: [
          'react-hot-loader',
          'babel-loader',
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
  resolve: {
    extensions: ['.js', '.json'],
  },
  plugins: [],
};

module.exports = baseConfig;
