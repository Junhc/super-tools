var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('check', { title: 'Super Tools' });
});

module.exports = router;

