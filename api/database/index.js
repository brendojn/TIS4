import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import { Classroom, Enrollment, Professor, Student } from '../src/models';

const models = [Classroom, Enrollment, Professor, Student];

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
