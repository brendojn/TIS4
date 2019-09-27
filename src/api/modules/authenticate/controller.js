import jwt from 'jsonwebtoken';
class SessionControler {
  async store(req, res) {
    const { email, password } = req.body;
  }
}

export default new SessionControler();
