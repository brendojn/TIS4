'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define(
    'Student',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      profile_img: DataTypes.STRING,
      password: DataTypes.STRING,
      registration: DataTypes.INTEGER,
      active: DataTypes.BOOLEAN,
    },
    {}
  );
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};
