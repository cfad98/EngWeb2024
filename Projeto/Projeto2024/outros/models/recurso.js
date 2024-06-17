const mongoose = require('mongoose');

const recursoSchema = new mongoose.Schema({
    titulo: String,
    descricao: String,
    tipo: String,
    dataCriacao: { type: Date, default: Date.now },
    autor: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
    estado: { type: String, enum: ['publico', 'privado'], default: 'publico' },
    avaliacao: { type: Number, default: 0 }
});

const Recurso = mongoose.model('Recurso', recursoSchema);

module.exports = Recurso;
