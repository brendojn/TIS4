import Sequelize, { Model } from 'sequelize';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        registration: Sequelize.INTEGER,
        email: Sequelize.STRING,
        profile_img: Sequelize.STRING,
        password: Sequelize.STRING,
        course: Sequelize.STRING,
        adm: Sequelize.BOOLEAN,
        semester: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}

export default Student;
