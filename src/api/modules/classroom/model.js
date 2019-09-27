import Sequelize, { Model } from 'sequelize';
import User from '../user/model';

class Classroom extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
      }
    );
    this.belongsTo(User, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE',
    });
  }
}

export default Classroom;
