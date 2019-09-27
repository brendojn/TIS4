import Sequelize from 'sequelize';
import User from '../user/User';
import Class from '../class/Class';

class Teacher extends User {
  static init(sequelize) {
    super.init(
      {
        course: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}

Teacher.hasOne(Class);

export default Teacher;
