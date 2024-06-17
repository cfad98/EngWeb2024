var express = require('express');
var router = express.Router();
var Recurso = require('../models/recurso');

// Rota para criar um novo recurso
router.post('/', (req, res) => {
    var novoRecurso = new Recurso(req.body);
    novoRecurso.save()
        .then(recurso => res.status(201).send(recurso))
        .catch(err => res.status(500).send(err.message));
});

// Rota para obter todos os recursos
router.get('/', (req, res) => {
    Recurso.find()
        .then(recursos => res.status(200).send(recursos))
        .catch(err => res.status(500).send(err.message));
});

// Rota para avaliar um recurso
router.post('/:id/avaliar', (req, res) => {
    Recurso.findByIdAndUpdate(req.params.id, { avaliacao: req.body.avaliacao }, { new: true })
        .then(recurso => {
            if (!recurso) {
                return res.status(404).send('Recurso não encontrado');
            }
            res.status(200).send(recurso);
        })
        .catch(err => res.status(500).send(err.message));
});

module.exports = router;
