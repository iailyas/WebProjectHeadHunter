const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");
const Portfolio = sequelize.define("Portfolio", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  skills: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  wishes: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Portfolio;
