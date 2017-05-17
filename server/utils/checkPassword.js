const bcrypt = require('bcrypt');
const Promise = require('bluebird');

const compare = Promise.promisify(bcrypt.compare);

module.exports = (password, hash) => (
  compare(password, hash)
);
