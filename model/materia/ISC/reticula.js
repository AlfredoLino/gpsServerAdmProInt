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
        dep: 
        {
            type: String,
            required: true
        },
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


