const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");
const bcrypt = require("bcrypt");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  login: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

User.beforeCreate((user, opts) => {
  user.password = User.hashPassword(user.password);
});

User.hashPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

User.prototype.validatePassword = function (password) {
  if (!password || !this.password) {
    return false;
  }
  return bcrypt.compareSync(password, this.password);
};

module.exports = User;
