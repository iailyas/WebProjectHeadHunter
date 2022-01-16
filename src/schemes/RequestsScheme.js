const Joi = require("joi");

const RequestsScheme = {
  create: Joi.object().keys({
    description: Joi.string().required(),
  }),

  edit: Joi.object().keys({
    description: Joi.string(),
  }),
};

module.exports = RequestsScheme;
