const Joi = require("joi");

const SeanceScheme = {
  create: Joi.object().keys({
    offer: Joi.string().required(),

    salary: Joi.number().integer().required(),
  }),

  edit: Joi.object().keys({
    offer: Joi.string(),

    salary: Joi.number().integer(),
  }),
};

module.exports = SeanceScheme;
