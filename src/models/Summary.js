const Sequelize = require("sequelize");
const sequelize = require("../config/DatabaseConfig");

const Summary = sequelize.define("summary", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
    field: "id",
  },
  offer: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: false,
    field: "offer",
  },
  salary: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: false,
    field: "salary",
  },
});

module.exports = Summary;
