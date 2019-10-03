'use strict';
module.exports = (sequelize, DataTypes) => {
  const Professor = sequelize.define(
    'Professor',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      admin: DataTypes.BOOLEAN,
      profile_img: DataTypes.STRING,
      password: DataTypes.STRING,
      registration: DataTypes.INTEGER,
    },
    {
      sequelize,
    }
  );
  Professor.associate = function(models) {
    // associations can be defined here
  };
  return Professor;
};
