import Sequelize, { Model } from 'sequelize';
import Professor from '../professor/model';

class Classroom extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        professor_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
      }
    );
    this.belongsTo(Professor);
  }
}

export default Classroom;
