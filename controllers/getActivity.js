const model = require("../model/proyecto/proyectoIntegrador")


const controllerDownload = async (req, res, next) =>{
    const titulo = "Tec Madero"
    const actividad = "Cronograma"
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