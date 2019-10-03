'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'professors',
      [
        {
          name: 'John Doe',
          email: 'johndoe@hermes.com',
          admin: false,
          password: 'dev',
          registration: 101010,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('professors', null, {});
  },
};
