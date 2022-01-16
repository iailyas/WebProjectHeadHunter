const Sequelize = require("sequelize");
const sequelize = require("../config/DatabaseConfig");

const Vacancies = sequelize.define("vacancies", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
    field: "id",
  },
  salary: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: false,
    field: "salary",
  },
  contacts: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
    field: "contacts",
  },
  requirements: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
    field: "requirements",
  },
  conditions: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
    field: "conditions",
  },
});

module.exports = Vacancies;
