import Sequelize from 'sequelize';
import User from '../user/User';
import Class from '../class/Class';

class Student extends User {
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

Student.belongsTo(Class);

export default Class;
