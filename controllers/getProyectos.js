const model = require("../model/proyecto/proyectoIntegrador")

const controller = async (req, res ,next)=>{
    
    try {
        const {nombre, all} = req.body
        if(all){
            console.log('TODOS')
            const docs = await model.find({profResp: nombre})
            if(docs.length>0){
                res.status(201).json(
                    {
                        proyecto: docs
                    }
                )
            }else{
                res.status(404).json({ error: "elementos no encontrados" })
            }
        } else {
            console.log('UNO')
            const doc = await model.findOne({profResp: nombre})
            if(doc){
                res.status(201).json(
                    {
                        proyecto: doc
                    }
                )
            }else{
                res.status(404).json({ error: "elementos no encontrados" })
            }
        }
    } catch (error) {
        res.status(404).json({ error: "elementos no encontrados" })
    }
}

module.exports = controller