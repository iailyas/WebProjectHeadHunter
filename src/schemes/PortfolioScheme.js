const Joi = require("joi");

const PortfolioScheme = {
  create: Joi.object().keys({
    skills: Joi.string().required(),

    wishes: Joi.string().required(),
  }),

  edit: Joi.object().keys({
    skills: Joi.string(),

    wishes: Joi.string(),
  }),
};

module.exports = PortfolioScheme;
