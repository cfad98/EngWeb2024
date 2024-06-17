var express = require('express');
var router = express.Router();
var Comentario = require('../models/comentario');

// Rota para criar um novo comentário
router.post('/', (req, res) => {
    var novoComentario = new Comentario(req.body);
    novoComentario.save()
        .then(comentario => res.status(201).send(comentario))
        .catch(err => res.status(500).send(err.message));
});

// Rota para obter todos os comentários de um recurso
router.get('/:recursoId', (req, res) => {
    Comentario.find({ recurso: req.params.recursoId })
        .then(comentarios => res.status(200).send(comentarios))
        .catch(err => res.status(500).send(err.message));
});

module.exports = router;
