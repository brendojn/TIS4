import bcrypt from 'bcryptjs';

class Password {
  static async generatePassword(password) {
    const hash = await bcrypt.hash(password, 8);
    return hash;
  }
  static async checkPassword(password, userPassword) {
    return await bcrypt.compare(password, userPassword);
  }
}

export default Password;
