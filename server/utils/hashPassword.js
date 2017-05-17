const bcrypt = require('bcrypt');
const Promise = require('bluebird');

const SALT_ROUNDS = 10;
const hashPass = Promise.promisify(bcrypt.hash);

module.exports = password => (
  hashPass(password, SALT_ROUNDS)
);
