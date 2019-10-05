import Sequelize, { Model } from 'sequelize';

const professor = require ('./professor');

class Classroom extends Model {
  static init(sequelize) {
    super.init(
      {
        course: Sequelize.STRING,
        semester: Sequelize.STRING,
        description: Sequelize.STRING,
        shift: Sequelize.STRING,
        class_code: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsTo(professor);
  }
}

export default Classroom;
