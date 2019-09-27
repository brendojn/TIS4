import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

//  ! All models must be imported below ! //
import User from '../api/modules/user/model';
import Classroom from '../api/modules/classroom/model';

const models = [User, Classroom];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
