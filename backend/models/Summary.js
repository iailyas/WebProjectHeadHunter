const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");
const Summary = sequelize.define("Summary", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  offer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  salary: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  vacancy_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Summary;
