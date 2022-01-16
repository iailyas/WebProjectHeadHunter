const Sequelize = require("sequelize");
const sequelize = require("../config/DatabaseConfig");

const Portfolio = sequelize.define("portfolio", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
    field: "id",
  },
  skills: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    field: "skills",
  },
  wishes: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: false,
    field: "wishes",
  },
});

module.exports = Portfolio;
