const User = require("./User");
const Company = require("./Company");
const Vacancies = require("./Vacancies");
const Summary = require("./Summary");
const User_info = require("./User_info");
const Review = require("./Review");
const Requests = require("./Requests");
const Portfolio = require("./Portfolio");
const Working_place = require("./Working_place");
const { request } = require("express");

User.hasOne(User_info);
User_info.belongsTo(User);

Company.hasMany(User);
User.belongsTo(Company);

User.hasMany(Review);
Review.belongsTo(User);

User.hasMany(Portfolio);
Portfolio.belongsTo(User);

User.hasMany(Summary);
Summary.belongsTo(User);

Company.hasMany(Vacancies);
Vacancies.belongsTo(Company);

Vacancies.hasMany(Summary);
Summary.belongsTo(Summary);

Company.hasMany(Requests);
Requests.belongsTo(Company);

Requests.hasOne(Portfolio);
Portfolio.belongsTo(Requests);

Portfolio.hasMany(Working_place);
Working_place.belongsTo(Portfolio);
// User.belongsTo(Company);
// User.belongsTo(User_info);
// User.belongsTo(Portfolio);
// User.belongsTo(Review);
// User.belongsTo(Summary);

// Company.hasMany(Vacancies, { foreignKey: "company_id" });
// Company.hasMany(Requests, { foreignKey: "company_id" });
// Company.hasMany(Review, { foreignKey: "company_id" });

// Summary.belongsTo(Vacancies);

// User.hasOne(Summary, { foreignKey: "User_info.id" });

// Requests.belongsTo(Portfolio);

// Portfolio.hasMany(Working_place, { foreignKey: "portfolio_id" });
