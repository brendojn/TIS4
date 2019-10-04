import Sequelize, { Model } from 'sequelize';
import Password from 'api/src/middlewares/auth/password';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
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

  static associate(models) {
    this.belongsTo(professor);
  }
}

export default Student;
