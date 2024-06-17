var express = require('express');
var router = express.Router();
var Usuario = require('../models/usuario');

// Rota para criar um novo usuário
router.post('/', (req, res) => {
    var novoUsuario = new Usuario(req.body);
    novoUsuario.save()
        .then(usuario => res.status(201).send(usuario))
        .catch(err => res.status(500).send(err.message));
});

module.exports = router;
