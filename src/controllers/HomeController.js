import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Maria',
      sobrenome: 'Joana',
      email: 'sativa@gmail.com',
      idade: 22,
      peso: 60.1,
      altura: 4.20
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
