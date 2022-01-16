const Joi = require("joi");

const Working_placeScheme = {
  create: Joi.object().keys({
    name: Joi.string().required(),

    position: Joi.string().required(),

    start_date: Joi.string().required(),

    end_date: Joi.string().required(),
  }),

  edit: Joi.object().keys({
    name: Joi.string(),

    position: Joi.string(),

    start_date: Joi.string(),

    end_date: Joi.string(),
  }),
};

module.exports = Working_placeScheme;
