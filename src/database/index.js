import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

//  ! All models must be imported below ! //
import User from '../api/modules/user';
import Student from '../api/modules/student/Student';
import Class from '../api/modules/class/Class';

const models = [User, Student, Class];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init());
  }
}

export default new Database();
