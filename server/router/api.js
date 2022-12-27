const express = require('express');
const router = express.Router();

const user = require('./user/user');

const { apiGetUser } = require(`./user/user`);

router.get('/', (req, res) => {
  res.send('hello');
});

router.use('/user', user);

module.exports = router;
