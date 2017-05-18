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

router.post('/', (req, res) => {
  const {
    title,
    isComplete,
    UserId,
  } = req.body;

  const todo = {
    title,
    isComplete,
    UserId,
  };

  Todo.create(todo)
  .then((result) => {
    res.status(200).json({ data: result.dataValues });
  })
  .catch((error) => {
    res.status(200).json({ error });
  });
});

module.exports = router;
