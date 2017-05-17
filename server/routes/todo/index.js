const express = require('express');
const { Todo } = require('../../models');
const router = express.Router();

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
    userId,
  } = req.body;

  const todo = {
    title,
    isComplete,
    UserId: userId,
  };

  Todo.create(todo)
  .then(result => {
    res.send('hello');
  });
});

module.exports = router;
