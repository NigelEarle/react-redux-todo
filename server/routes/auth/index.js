const express = require('express');
const passport = require('passport');
const { User } = require('../../models');
const hashPassword = require('../../utils/hashPassword');

const router = express.Router();

router.post('/register', (req, res) => {
  const {
    username,
    password,
  } = req.body;

  hashPassword(password)
  .then((hash) => {
    const user = {
      username,
      password: hash,
    };

    return User.create(user);
  })
  .then((result) => {
    res.json({ result: result.dataValues });
  })
  .catch((err) => {
    res.json({ err });
  });
});

router.post('/login', (req, res) => {
  passport.authenticate('local', (err, user) => {
    if (err) return res.status(500).json({ err });

    if (!user) return res.status(401).json({ message: 'invalid' });

    req.logIn(user, (error) => {
      if (err) return res.json({ error });
      return res.status(200).json({ id: user.id, username: user.username });
    });
  })(req, res);
});

module.exports = router;
