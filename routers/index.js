const express = require('express');
const router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/home', (req, res, next) => {
  res.render('home', { title: 'Express', layout: 'layout' });
});

module.exports = router;
