const Sequelize = require("sequelize");
const sequelize = require("../config/DatabaseConfig");

const Company = sequelize.define("company", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
    field: "id",
  },
  name: {
    type: Sequelize.STRING(50),
    allowNull: false,
    unique: true,
    field: "name",
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    field: "phone",
  },
  adress: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    field: "adress",
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    field: "description",
  },
});

module.exports = Company;
