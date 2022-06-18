const {Schema, model} = require('mongoose');
// 33 28 77 04 35 201 || 2055332769780781653608
const alumnoSchema = new Schema({
    ncontrol:{
        type: String,
        required: true
    },
    departamento:{
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
    semestre:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    }
})

module.exports = model('Alumno', alumnoSchema);
//cmendez@mx1.ibm.com
