const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");
const User_info = sequelize.define("User_info", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  projects: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User_info;
