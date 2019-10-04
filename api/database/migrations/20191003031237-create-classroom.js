'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'classrooms',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        course: {
          type: Sequelize.STRING,
        },
        semester: {
          type: Sequelize.STRING,
        },
        description: {
          type: Sequelize.STRING,
        },
        shift: {
          type: Sequelize.STRING,
        },
        class_code: {
          type: Sequelize.STRING,
        },
        professor_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'professors',
            key: 'id',
          },
          allowNull: false,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      { timestamps: true }
    );
  },
  down: (queryInterface, Sequelize) => {
    return (
      queryInterface.dropTable('enrollments') &&
      queryInterface.dropTable('classrooms')
    );
  },
};
