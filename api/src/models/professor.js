import Sequelize, { Model } from 'sequelize';
import Password from '../modules/auth/password';

class Professor extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        admin: Sequelize.BOOLEAN,
        profile_img: Sequelize.STRING,
        password: Sequelize.STRING,
        registration: Sequelize.INTEGER,
        active: Sequelize.BOOLEAN,
      },
      { sequelize }
    );

    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password = await Password.generatePassword(user.password);
      }
    });

    return this;
  }
}

export default Professor;
