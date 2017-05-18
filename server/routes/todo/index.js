const express = require('express');
const { Todo } = require('../../models');

const router = express.Router();

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: 'unauthorized' });
};

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Todo.findAll({
    where: {
      UserId: id,
    },
    raw: true,
  })
  .then((data) => {
    res.json({ data });
  })
  .catch((err) => {
    res.json({ err });
  });
});

router.post('/', isAuthenticated, (req, res) => {
  const {
    title,
    isComplete,
    userId,
  } = req.body;

  const todo = {
    title,
    isComplete,
    UserId: userId,
  };

  Todo.create(todo)
  .then((result) => {
    res.send('hello');
  });
});

module.exports = router;
