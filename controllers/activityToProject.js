const model = require("../model/proyecto/proyectoIntegrador")
const fs = require("fs")

const controller = async (req, res)=>{
    const {filePath, fecha, titulo, actividad} = req.body
    console.log(filePath)
    console.log("hola")
    try {
        const fileBuffer = fs.readFileSync(filePath)
        const doc = await model.findOne( {tituloProInt: titulo} )
        if(doc){
            doc.cronograma.forEach(act =>{
                if(act.nombreActividad == actividad){
                    act.entregado = {
                        fecha,
                        archivo: fileBuffer
                    }
                }
            })
            const newDoc = await doc.save()
            console.log(newDoc)
            if(newDoc){
                res.status(201).json({ok: true})
            }else{
                res.status(501).json({ ok:false, message: "error"})
            }
        }else{
            res.status(501).json({ ok:false, message: "error"})
        }
    } catch (error) {
        res.status(501).json({ok:false, message: "error"})
    }

}

module.exports = controller