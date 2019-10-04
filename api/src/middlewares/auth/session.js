import jwt from 'jsonwebtoken';
import Professor from '../../models/professor';
import Student from '../../models/student';
import Password from './password';
import authConfig from '../../../config/auth';

class Session {
  async store(req, res) {
    const { email, password, isProfessor } = req.body;

    const user = isProfessor
      ? await Professor.findOne({ where: { email: email } })
      : await Student.findOne({ where: { email: email } });

    if (!user) {
      return res.status(401).json({ error: 'User not found.' });
    }

    const isValid = await Password.checkPassword(password, user.password);

    if (!isValid) {
      return res.status(401).json({ error: 'Password does not match.' });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
        token: jwt.sign({ id }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),
      },
    });
  }
}

export default new Session();
