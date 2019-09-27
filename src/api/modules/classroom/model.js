import Sequelize, { Model } from 'sequelize';
import User from '../user/model';

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
    this.belongsTo(User);
  }
}

export default Classroom;
