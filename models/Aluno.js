const mongoose = require('mongoose');

const alunoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
}, {
  timestamps: true // Cria automaticamente os campos createdAt e updatedAt
});

const Aluno = mongoose.model('Aluno', alunoSchema);

module.exports = Aluno;
