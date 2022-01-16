const Sequelize = require("sequelize");
const sequelize = require("../config/DatabaseConfig");

const Requests = sequelize.define("requests", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
    field: "id",
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
    field: "description",
  },
});

module.exports = Requests;
