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

router.post('/login', passport.authenticate('local'),
  (req, res) => {
    res.json({ success: true }).status(200);
  });

module.exports = router;
