import Sequelize, { Model } from 'sequelize';
import Professor from './professor/model';

const enrollment = require ('./enrollment/model');

class Classroom extends Model {
  static init(sequelize) {
    super.init(
      {
        course: Sequelize.STRING,
        semester: Sequelize.STRING,
        description: Sequelize.STRING,
        shift: Sequelize.STRING,
        class_code: Sequelize.STRING,
      },{
        sequelize
      }
    );
  }
  
  static associate(models) {
    this.belongsTo(professor);
  }
}

export default Classroom;
