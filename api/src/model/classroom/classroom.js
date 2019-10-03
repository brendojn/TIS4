'use strict';
module.exports = (sequelize, DataTypes) => {
  const Classroom = sequelize.define(
    'Classroom',
    {
      course: DataTypes.STRING,
      semester: DataTypes.STRING,
      description: DataTypes.STRING,
      shift: DataTypes.STRING,
      class_code: DataTypes.STRING,
    },
    {}
  );

  Classroom.associate = function(models) {
    Classroom.belongsTo(models.professor);
  };

  return Classroom;
};
