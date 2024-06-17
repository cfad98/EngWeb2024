var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');

// Conectar ao MongoDB
require('./config/database');

var indexRouter = require('./routes/index');
var usuariosRouter = require('./routes/usuarios');
var recursosRouter = require('./routes/recursos');
var comentariosRouter = require('./routes/comentarios');
var authRouter = require('./routes/auth');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/usuarios', usuariosRouter);
app.use('/recursos', recursosRouter);
app.use('/comentarios', comentariosRouter);
app.use('/auth', authRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

// Inicia o servidor na porta 3000
var port = 3000;
app.listen(port, () => {
  console.log(`Servidor ligado em http://localhost:${port}`);
});

module.exports = app;
