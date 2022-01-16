const Joi = require("joi");

const CompanyScheme = {
  create: Joi.object().keys({
    name: Joi.string().required(),
    phone: Joi.string().required(),
    adress: Joi.string().required(),
    description: Joi.string().required(),
  }),

  edit: Joi.object().keys({
    name: Joi.string(),
    phone: Joi.string(),
    adress: Joi.string(),
    description: Joi.string(),
  }),
};

module.exports = CompanyScheme;
