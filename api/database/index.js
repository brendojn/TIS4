import Sequelize from 'sequelize';
import dbConfig from '../config/database';
import Professor from '../src/models/professor';
import Student from '../src/models/student';
import Classroom from '../src/models/classroom';
import Enrollment from '../src/models/enrollment';

const models = [Classroom, Enrollment, Professor, Student];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
