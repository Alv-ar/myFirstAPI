const Joi = require("@hapi/joi");
Joi.objectId = require("joi-objectid")(Joi);

module.exports.createUserSchema = Joi.object({
    name: Joi.string().alphanum().required(),
});

module.exports.userIdSchema = Joi.object({
    id: Joi.objectId().required(),
});
