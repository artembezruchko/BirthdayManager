const express = require('express');
const db = require('./db');

const router = express.Router();


router.get('/getUser', (req, res, next) => {
  db.User.find()
    .byName('admin')
    .exec((err, user) => {
      if (err) {
        next(err);
      }
      res.send(user);
    });
});

router.post('/loginUser', (req, res) => {
  const result = {
    id: 1,
    name: 'admin',
  };
  res.send(result);
});

module.exports = router;
