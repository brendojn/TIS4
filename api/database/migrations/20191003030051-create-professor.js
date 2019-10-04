'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'professors',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        admin: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        profile_img: {
          type: Sequelize.STRING,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        registration: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        active: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true,
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
  down: queryInterface => {
    return (
      queryInterface.dropTable('classrooms') &&
      queryInterface.dropTable('professors')
    );
  },
};
