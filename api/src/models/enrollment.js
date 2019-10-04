import Sequelize, { Model } from 'sequelize';

class Enrollment extends Model {
  static init(sequelize) {
    super.init(
      {
        classroom_id: Sequelize.INTEGER,
        student_id: Sequelize.INTEGER,
      },
      { sequelize }
    );
  }
}

export default Enrollment;
