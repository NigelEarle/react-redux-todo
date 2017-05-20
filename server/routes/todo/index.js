const express = require('express');
const { Todo } = require('../../models');

const router = express.Router();

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: 'unauthorized' });
};

router.get('/', isAuthenticated, (req, res) => {
  const { id } = req.user.dataValues;
  Todo.findAll({
    where: {
      UserId: id,
    },
    raw: true,
  })
  .then((data) => {
    res.status(200).json({ data });
  })
  .catch((err) => {
    res.status(400).json({ err });
  });
});

router.route('/')
  .post(isAuthenticated, (req, res) => {
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
      res.status(400).json({ error });
    });
  })
  .put(isAuthenticated, (req, res) => {
    const {
      id,
      title,
      isComplete,
    } = req.body;

    const updateTodo = {
      title,
      isComplete,
    };

    Todo.update(
      updateTodo,
      {
        where: { id },
      })
    .then(([result]) => {
      if (result === 1) {
        return Todo.findOne({
          where: { id },
        });
      }
    })
    .then((data) => {
      res.status(200).json({ data: data.dataValues });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
  });

router.delete('/delete/:id', isAuthenticated, (req, res) => {
  const { id } = req.params;
  Todo.destroy({
    where: {
      id,
    },
  })
  .then((result) => {
    if (result === 1) {
      res.status(200).json({ success: true });
    }
  })
  .catch((error) => {
    res.status(400).json({ error });
  });
});

module.exports = router;
