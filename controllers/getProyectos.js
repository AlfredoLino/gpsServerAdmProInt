const model = require("../model/proyecto/proyectoIntegrador")

const controller = async (req, res ,next)=>{
    
    try {
        const {nombre} = req.body
        const doc = await model.find({profResp: nombre})
        if(doc){
            res.status(201).json(
                {
                    proyecto: doc
                }
            )
        }else{
            res.status(404).json({ error: "elementos no encontrados" })
        }
    } catch (error) {
        res.status(404).json({ error: "elementos no encontrados" })
    }
}

module.exports = controller