import Professor from '../models/professor';

class ProfessorController {
  async store(req, res) {
    const alreadyExists = await Professor.findOne({
      where: { email: req.body.email },
    });

    if (alreadyExists) {
      return res.status(402).json({ error: 'This user already exists.' });
    }

    const professor = await Professor.create(req.body);

    res.json(professor);
  }
}

export default new ProfessorController();
