'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'enrollments',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        classroom_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'classrooms',
            key: 'id',
          },
          allowNull: false,
        },
        student_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'students',
            key: 'id',
          },
          allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      { timestamps: true }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Enrollments');
  },
};
