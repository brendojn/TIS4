import Sequelize, { Model } from 'sequelize';

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
      },
      { sequelize }
    );
  }
}

export default Professor;
