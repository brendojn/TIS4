import Sequelize, { Model } from 'sequelize';
import Teacher from '../teacher/Teacher';
import Student from '../student/Student';

class Class extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

Class.belongsTo(Teacher);
Class.hasMany(Student);

export default Teacher;
