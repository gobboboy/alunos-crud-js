import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll(
      {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']], // ASC -> crescente, DESC -> decrescente
        include: {
          model: Foto,
          attributes: ['id', 'filename'],
        },
      }
    );
    res.json(alunos);
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      return res.json(aluno);
    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if(!id) {
        return res.status(400).json({
          errors: ['Faltando ID']
        });
      }
      const aluno = await Aluno.findByPk(id,
        {
          attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
          order: [['id', 'DESC'], [Foto, 'id', 'DESC']], // ASC -> crescente, DESC -> decrescente
          include: {
            model: Foto,
            attributes: ['id', 'filename'],
          },
        }
      );
      if(!aluno) {
        return res.status(400).json({
          errors: ['Aluno nao existe']
        });
      }
      return res.json(aluno);
    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if(!id) {
        return res.status(400).json({
          errors: ['Faltando ID']
        });
      }
      const aluno = await Aluno.findByPk(id,
        {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura']
        }
      );
      if(!aluno) {
        return res.status(400).json({
          errors: ['Aluno nao existe']
        });
      }
      const alunoAtualizado = await aluno.update(req.body);
      return res.json(alunoAtualizado);
    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if(!id) {
        return res.status(400).json({
          errors: ['Faltando ID']
        });
      }
      const aluno = await Aluno.findByPk(id);
      if(!aluno) {
        return res.status(400).json({
          errors: ['Aluno nao existe']
        });
      }
      await aluno.destroy();
      return res.json({msg: 'O aluno foi apagado com sucesso!'});
    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }
}
export default new AlunoController();
