'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'students',
      [
        {
          name: 'James Doe',
          email: 'jamesdoe@hermes.com',
          password: 'dev',
          registration: 202020,
          active: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('students', null, {});
  },
};
