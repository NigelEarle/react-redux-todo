const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const SESSION_SECRET = process.env.SESSION_SECRET || require('./server/config/session.json').secret;
const routes = require('./server/routes');
const checkPassword = require('./server/utils/checkPassword');
const db = require('./server/models');

const { User } = db;
const PORT = process.env.PORT || 3001;
const isDev = process.env.NODE_ENV !== 'production';

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client')));

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', routes);

if (isDev) {
  const webpack = require('webpack');
  const devConfig = require('./webpack.config.development');
  const compiler = webpack(devConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: devConfig.output.publicPath,
    contentBase: 'client',
    historyApiFallback: true,
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
} else {
  app.use(express.static(path.join(__dirname, '/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/bundle', '/index.html')); // TODO: sending document to browser
});

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
  .then((user) => {
    done(null, user);
  })
  .catch((err) => {
    done(err, false);
  });
});

passport.use(new LocalStrategy((username, password, done) => {
  User.findOne({
    where: {
      username,
    },
  })
  .then((user) => {
    if (!user) {
      return done(null, false);
    }
    checkPassword(password, user.password)
    .then((isValid) => {
      if (isValid) {
        return done(null, user);
      }
      return done(null, false);
    });
  })
  .catch((err) => {
    done(err);
  });
}));

app.listen(PORT, () => {
  db.sequelize.sync();
  console.log(`listening on port: ${PORT}`);
});
