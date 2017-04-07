'use strict';
module.exports = function(sequelize, DataTypes) {
  var Crime = sequelize.define('Crime', {
    population: DataTypes.INTEGER,
    violent_crime: DataTypes.INTEGER,
    murder_manslaughter: DataTypes.INTEGER,
    rape_revised: DataTypes.INTEGER,
    rape_legacy: DataTypes.INTEGER,
    robbery: DataTypes.INTEGER,
    aggravated_assault: DataTypes.INTEGER,
    property_crime: DataTypes.INTEGER,
    burglary: DataTypes.INTEGER,
    larceny_theft: DataTypes.INTEGER,
    motor_vehicle_theft: DataTypes.INTEGER,
    arson: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Crime;
};