import User from './model';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({
      where: { email: req.body.email },
    });

    if (userExists) {
      return res.status(400).json({ error: 'This user already exists.' });
    }

    const user = await User.create(req.body);

    return res.json(user);
  }

  async update(req, res) {
    const { oldPassword, email } = req.body;

    const oldUser = await User.findByPk(req.userId);

    if (email !== oldUser.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({ error: 'This email is already used.' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const newUser = await oldUser.update(req.body);

    return res.json(newUser);
  }

  async delete(req, res) {
    const user = await User.findByPk(req.userId);
    user.destroy();

    return res.json({
      response: {
        msg: 'User was deleted.',
        user,
      },
    });
  }
}

export default new UserController();
