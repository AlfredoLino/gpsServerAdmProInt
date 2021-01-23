const model = require("../model/proyecto/proyectoIntegrador")
const fs = require('fs')

const controllerDownload = async (req, res, next) =>{
    
    const titulo = req.param('proyecto')
    const actividad = req.param('actividad')
    console.log(titulo, actividad)
    try {
        const doc = await model.findOne(
            {
                tituloProInt: titulo,
                cronograma:{
                    $elemMatch:{
                        nombreActividad: actividad
                    }
                }
            }
        )
        if(doc){
            
            doc.cronograma.forEach( act =>{
                if(act.nombreActividad == actividad){
                    const newFile = new Buffer.from(act.entregado.archivo)
                    fs.writeFileSync('./controllers/docs/actividad.pdf', newFile)
                    res.download('./controllers/docs/actividad.pdf')
                }
            })

            
        }else{
            const err = new Error("Error en el servidor")
            throw err;
        }
    } catch (error) {
        res.json({...error})
    }
}

module.exports = controllerDownload