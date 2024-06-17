var express = require('express');
var router = express.Router();

router.get('/login', function(req, res, next) {
  res.render('login_registar');
});

router.get('/registar', function(req, res, next) {
  res.render('login_registar');
});

module.exports = router;
