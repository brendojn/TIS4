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
    res.json({ msg: 'Yeah. We are almost there.' });
  }
}

export default new UserController();
