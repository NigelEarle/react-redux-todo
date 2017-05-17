const express = require('express');
const webpack = require('webpack');
const bodyParser = require('body-parser');
const path = require('path');
const devConfig = require('./webpack.config.development');
const routes = require('./server/routes');
const db = require('./server/models');

const PORT = process.env.PORT || 3001;
const isDev = process.env.NODE_ENV !== 'production';

const app = express();

app.use(bodyParser.json());
app.use('/api', routes);

if (isDev) {
  const compiler = webpack(devConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: devConfig.output.publicPath,
    contentBase: 'client',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false,
    },
  }));
  app.use(require('webpack-hot-middleware')(compiler));
  app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'client', 'index.html')));
} else {
  app.use(express.static(path.join__dirname(__dirname, '/build')));
  app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'client', 'index.html')));
}

app.listen(PORT, () => {
  db.sequelize.sync({ force: true });
  console.log(`listening on port: ${PORT}`);
});
