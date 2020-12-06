const mongoose = require('mongoose')

const profesorSchema = mongoose.Schema(
    {
        nombre:
        {
            type: String,
            required: true
        },
        email:
        {
            type: String,
            required: true
        },
        password: 
        {
            type: String,
            required: true
        },
        dep:
        {
            type: String,
            required: true
        }
    }
)

module.exports = mongoose.model('Profesor', profesorSchema)