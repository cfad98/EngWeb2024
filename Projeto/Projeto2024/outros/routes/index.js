var express = require('express');
var router = express.Router();

// Redireciona para a página de login/registo
router.get('/', function(req, res, next) {
  res.redirect('/auth/login');
});

module.exports = router;
