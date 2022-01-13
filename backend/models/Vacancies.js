const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");
const Vacancies = sequelize.define("Vacancies", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  salary: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  company_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  contacts: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  requirements: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  conditions: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Vacancies;
