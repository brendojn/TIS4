import Professor from './model';

class ProfessorController {
  async store(req, res) {
    const user = await Professor.create(req.body);

    return res.json(user);
  }
}

export default new ProfessorController();
