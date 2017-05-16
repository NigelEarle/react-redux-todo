const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth'));
router.use('/todo', require('./todo'));

module.exports = router;
