import * as Yup from 'yup';
import Professor from '../models/professor';
import Password from '../middlewares/auth/password';

class ProfessorController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      admin: Yup.boolean(),
      profile_img: Yup.string(),
      password: Yup.string()
        .required()
        .min(8),
      registration: Yup.number()
        .integer()
        .positive(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const alreadyExists = await Professor.findOne({
      where: { email: req.body.email },
    });

    if (alreadyExists) {
      return res.status(402).json({ error: 'This user already exists.' });
    }

    const { id, name, email, registration } = await Professor.create(req.body);

    res.json({
      professor: {
        id,
        name,
        email,
        registration,
      },
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      admin: Yup.boolean(),
      profile_img: Yup.string(),
      registration: Yup.number()
        .integer()
        .positive(),
      oldPassword: Yup.string().min(8),
      password: Yup.string()
        .min(8)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const { email, oldPassword } = req.body;

    const professor = await Professor.findByPk(req.userId);

    // checking if the new email was already picked by another user
    if (email !== professor.email) {
      const alreadyExists = await Professor.findOne({
        where: { email: email },
      });

      if (alreadyExists) {
        return res
          .status(402)
          .json({ error: 'This email belongs to another user.' });
      }
    }

    //checking if the old Password match with user password stored
    if (oldPassword) {
      const isValid = await Password.checkPassword(
        oldPassword,
        professor.password
      );
      if (!isValid) {
        return res.status(401).json({ error: 'Password does not match.' });
      }
    }

    const { id, name, registration } = await professor.update(req.body);

    res.json({
      professor: {
        id,
        name,
        email,
        registration,
      },
    });
  }
}

export default new ProfessorController();
