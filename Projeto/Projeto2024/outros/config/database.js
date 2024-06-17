const mongoose = require('mongoose');

const mongoURI = 'mongodb://127.0.0.1:27017/test';

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB conectado com sucesso!'))
  .catch(err => console.error('Falha ao conectar com MongoDB:', err));

module.exports = mongoose;
