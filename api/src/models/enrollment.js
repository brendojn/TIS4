'use strict';
module.exports = (sequelize, DataTypes) => {
  const Enrollment = sequelize.define(
    'Enrollment',
    {
      id: DataTypes.INTEGER,
    },
    { sequelize }
  );
  Enrollment.associate = function(models) {
    // associations can be defined here
  };
  return Enrollment;
};
