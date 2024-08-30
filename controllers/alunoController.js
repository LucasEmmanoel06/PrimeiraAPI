const Aluno = require('../models/Aluno');

// @desc    Get all alunos
// @route   GET /api/alunos
// @access  Public
exports.getAlunos = async (req, res) => {
  try {
    const aluno = await Aluno.find();
    res.json(aluno);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Get single aluno
// @route   GET /api/alunos/:id
// @access  Public
exports.getAlunoById = async (req, res) => {
  try {
    const aluno = await Aluno.findById(req.params.id);
    if (!aluno) {
      return res.status(404).json({ message: 'Aluno não encontrado' });
    }
    res.json(aluno);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Create new aluno
// @route   POST /api/alunos
// @access  Public
exports.createAluno = async (req, res) => {
  const { name, cpf, password } = req.body;
  try {
    const aluno = new Aluno({
      name,
      cpf,
      password
    });
    await aluno.save();
    res.status(201).json(aluno);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Update aluno
// @route   PUT /api/alunos/:id
// @access  Public
exports.updateAluno = async (req, res) => {
  try {
    const aluno = await Aluno.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!aluno) {
      return res.status(404).json({ message: 'Aluno não encotrado' });
    }
    res.json(aluno);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Delete aluno
// @route   DELETE /api/alunos/:id
// @access  Public
exports.deleteAluno = async (req, res) => {
  try {
    const aluno = await Aluno.findByIdAndDelete(req.params.id);
    if (!aluno) {
      return res.status(404).json({ message: 'Aluno não encontrado' });
    }
    res.json({ message: 'Aluno deletado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
