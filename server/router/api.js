const express = require('express');
const router = express.Router();

const userRouter = require('./user/user');
const itemRouter = require('./items/items');

router.get('/', (req, res) => {
  res.send('hello');
});

router.use('/user', userRouter);
router.use('/items', itemRouter);

module.exports = router;
