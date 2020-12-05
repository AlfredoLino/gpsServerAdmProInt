const mongoose = require('mongoose');

const materiaSchema = mongoose.Schema(
    {
        semestre: 
        {
            type: String,
            required: true
        },
        nombre:
        {
            type: String,
            required: true
        },
        compDes:
        {
            type: String,
            required: true
        },
        compPrev:
        {
            type: String,
            required: true
        }
    }
)

const reticulaSchema = mongoose.Schema(
    {
        studyPlan:
        {
            type: String,
            required: true
        },
        materias:
        [
            materiaSchema
        ] 
    }
)

const reticulaModel = mongoose.model('Reticula', reticulaSchema);
module.exports = reticulaModel;
