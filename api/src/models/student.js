import Sequelize, { Model } from 'sequelize';

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
  }
}

export default Student;
