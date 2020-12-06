const { boolean } = require('joi');
const mongoose = require('mongoose');

const actividadSchema = mongoose.Schema(
    {
        nombreActividad: 
        {
            type: String,
            required: true
        },
        responsables: [String],
        perdiodo:
        {
            inicio: Date,
            fin: Date
        },
        entregado:
        {
            check: Boolean,
            fecha: Date
        }

    }
)

const proyectoSchema = mongoose.Schema(
    {
        instituciones: 
        {
            type: Array,
            required: true    
        },
        depAcademic:
        {
            type: Array,
            required: true,
        },
        title:
        {
            type: String,
            required: true
        },
        coordinador:
        {
            type: String,
            required: true
        },
        semestre:
        {
            type: String,
            required: true
        },
        colabs:
        {
            type: Array,
            required: true
        },
        profResp:
        {
            type: Array,
            required: true
        },
        estudiantes:
        [
            {
                nombre : String,
                ncontrol: String
            }
        ],
        cliente:
        {
            type: String,
            required: true
        },
        planEstudio:
        {
            type: String,
            required: true
        },
        periodo:
        {
            inicio: Date,
            fin: Date
        },
        areaConoc:
        {
            type: Array,
            required: true
        },
        tipoEjecucion:
        {
            type: String,
            required: true
        },
        tituloProyecto:
        {
            type: String,
            required: true
        },
        tipoProyecto:
        {
            formativo: Boolean,
            resolutivo: Boolean
        },
        plantProInt:
        {
            type: String,
            required: true
        },
        justificacion:
        {
            type: String,
            required: true
        },
        alcances:
        {
            type: String,
            required: true
        },
        limitRes:
        {
            type: String,
            required: true
        },
        cronograma:
        [
            actividadSchema
        ],
        impactoProyecto:
        {
            type: String,
            required: true
        },
        producto: [String]
    }
)

module.exports = mongoose.model('Proyecto', proyectoSchema)

