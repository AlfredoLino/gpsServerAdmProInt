const model = require("../model/proyecto/proyectoIntegrador")

const controller = async (req, res)=>{
    const {titulo} = req.params
    try {
        const doc = await model.findOne({tituloProInt: titulo})
        if(doc){
            res.status(201).json(
                doc
            )
        }else{
            res.status(404).json({message: "ningun proyecto encontrado"})
        }
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = controller