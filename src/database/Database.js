// Connect to database
const sequelize = require("../config/DatabaseConfig");

// Loading Models //
const user = require("../models/User");
const userInfo = require("../models/UserInfo");
const userRole = require("../models/UserRole");
const role = require("../models/Role");
const working_place = require("../models/Working_place");
const vacancies = require("../models/Vacancies");
const summary = require("../models/Summary");
const review = require("../models/Review");
const requests = require("../models/Requests");
const portfolio = require("../models/Portfolio");
const company = require("../models/Company");

// User Info
user.hasOne(userInfo);
userInfo.belongsTo(user);

// Users roles
user.belongsToMany(role, { through: "users_roles" });
role.belongsToMany(user, { through: "users_roles" });

// Company;
// company.hasMany(user);
// user.belongsTo(company);
// //Review
// user.hasMany(review);
// review.belongsTo(user);
// //Portfolio
// user.hasMany(portfolio);
// portfolio.belongsTo(user);
// //Summary
// user.hasMany(summary);
// summary.belongsTo(user);
// //Vacancies
// company.hasMany(vacancies);
// vacancies.belongsTo(company);
// //Summary
// vacancies.hasMany(summary);
// summary.belongsTo(summary);
// //Requests
// company.hasMany(requests);
// requests.belongsTo(company);
// //Portfolio
// requests.hasOne(portfolio);
// portfolio.belongsTo(requests);
// //Working_place
// portfolio.hasMany(working_place);
// working_place.belongsTo(portfolio);

sequelize
  .sync()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.log(err));

sequelize
  .authenticate()
  .then(() => console.log("Successful connection to the database"))
  .catch((e) =>
    console.log("Failed connection to the database. Exception: " + e)
  );

module.exports = sequelize;
