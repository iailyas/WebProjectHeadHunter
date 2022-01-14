const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");
const Requests = sequelize.define("Requests", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Requests;
