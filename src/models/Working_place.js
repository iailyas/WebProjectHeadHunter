const Sequelize = require("sequelize");
const sequelize = require("../config/DatabaseConfig");

const Working_place = sequelize.define("working_place", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
    field: "id",
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
    field: "field",
  },
  position: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
    field: "position",
  },
  start_date: {
    type: Sequelize.DATE,
    allowNull: false,
    unique: false,
    field: "start_date",
    defaultValue: Date.now(),
  },
  end_date: {
    type: Sequelize.DATE,
    allowNull: false,
    unique: false,
    field: "end_date",
    defaultValue: Date.now(),
  },
});
module.exports = Working_place;
