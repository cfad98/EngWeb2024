const mongoose = require('mongoose');

const comentarioSchema = new mongoose.Schema({
    texto: String,
    autor: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
    dataCriacao: { type: Date, default: Date.now },
    recurso: { type: mongoose.Schema.Types.ObjectId, ref: 'Recurso' }
});

const Comentario = mongoose.model('Comentario', comentarioSchema);

module.exports = Comentario;
