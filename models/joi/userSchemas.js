const Joi = require('@hapi/joi');

module.exports.createUserSchema = Joi.object({
    name: Joi.string().alphanum().required(),
});