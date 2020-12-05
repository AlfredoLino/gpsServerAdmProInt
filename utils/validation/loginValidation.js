const joi = require('joi');

const loginValidation = joi.object(
    {
        email: joi.string().email(),
        password: joi.string().alphanum().min(6).max(12)
    }
)

module.exports = loginValidation