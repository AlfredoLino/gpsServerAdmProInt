const joi = require("joi")

const validate = joi.object({
    ncontrol : joi.string().length(8)
})

module.exports = validate