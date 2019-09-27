import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';
import Classroom from '../classroom/model';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        professor: Sequelize.BOOLEAN,
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        profile_img: Sequelize.STRING,
        password: Sequelize.STRING,
        registration: Sequelize.INTEGER,
        course: Sequelize.STRING,
        semester: Sequelize.INTEGER,
        adm: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password = await bcrypt.hash(user.password, 8);
      }
    });
    return this;
  }
  checkPassword(password) {
    return bcrypt.compare(password, this.password);
  }
}

export default User;
