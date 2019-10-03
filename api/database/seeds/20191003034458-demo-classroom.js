'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'classrooms',
      [
        {
          course: 'Contabilidade Internacional I',
          semester: '2019/1',
          description: 'John Doe CI Summer Class',
          shift: 'nocturne',
          class_code: 'y78h4ff',
          professor_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('classrooms', null, {});
  },
};
