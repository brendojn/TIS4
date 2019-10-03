import Professor from '../models/professor';

class ProfessorController {
  async store(req, res) {
    const alreadyExists = Professor.findOne({
      where: { email: req.body.email },
    });

    if (alreadyExists) {
      return res.status(402).json({ error: 'This user already exists.' });
    }

    const professor = Professor.create(req.body);

    res.json(professor);
  }
}

export default new ProfessorController();
