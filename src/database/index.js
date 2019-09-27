import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

//  ! All models must be imported below ! //
import Student from '../api/modules/student/model';
import Classroom from '../api/modules/classroom/model';
import Professor from '../api/modules/professor/model';

const models = [Professor, Classroom];

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
