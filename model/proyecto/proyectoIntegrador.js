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
        entrega: Date,
        entregado:
        {
            check: Boolean,
            fecha: Date,
            archivo: Buffer,
            comentario: String
        }

    }
)

const proyectoSchema = mongoose.Schema(
    {
        institucion: 
        {
            type: String,
            required: true    
        },
        departamentos:
        {
            type: Array,
            required: true,
        },
        coordinador:
        {
            type: String,
            required: false
        },
        materiaEje:{
            type: String,
            required: true
        },
        colab:
        {
            type: String,
            required: true
        },
        profResp:
        {
            type: String,
            required: true
        },
        alumnos:
        [
            {
                nombre : String,
                ncontrol: String,
                semestre: String,
                apellidos: String,
                departamento: String
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
            required: false
        },
        periodo:
        {
            inicio: Date,
            fin: Date
        },
        areaConoc:
        {
            type: String,
            required: true
        },
        asignaturas:[
            {
                nombre: String,
                semestre: String,
                compDes: String,
                compPrev: String,
                etapa_one: String,
                etapa_two: String,
                etapa_three: String,

            }
        ]
        ,
        tipoEjec:
        {
            type: String,
            required: true
        },
        tituloProInt:
        {
            type: String,
            required: true
        },
        tipoProyecto:
        {
            type: String,
            required: true
        },
        planteamiento:
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
        limityRest:
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
            required: false
        },
        producto: [String]
    }
)

module.exports = mongoose.model('Proyecto', proyectoSchema)

