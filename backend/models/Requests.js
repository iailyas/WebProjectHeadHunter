const {DataTypes} = require("sequelize");
const sequelize = require("../sequelize");
const Requests = sequelize.define("Requests", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    company_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    portfolio_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
      }
  });

  module.exports = Requests;