const Joi = require("joi");

const VacanciesScheme = {
  create: Joi.object().keys({
    salary: Joi.string().required(),

    contacts: Joi.string().required(),

    requirements: Joi.string().required(),

    conditions: Joi.string().required(),
  }),

  edit: Joi.object().keys({
    salary: Joi.string(),

    contacts: Joi.string(),

    requirements: Joi.string(),

    conditions: Joi.string(),
  }),
};

module.exports = VacanciesScheme;
