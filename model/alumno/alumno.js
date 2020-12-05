const {Schema, model} = require('mongoose');

const alumnoSchema = new Schema({
    ncontrol:{
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

module.exports = model('Alumno', alumnoSchema);
