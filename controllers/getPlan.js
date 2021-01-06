const modelReticula = require("../model/materia/ISC/reticula")

const controller = async (req, res)=>{
    const {dep} = req.body 
    try {
        const doc = await modelReticula.findOne({ dep })
        if(doc){
            res.status(200).json(
                {
                    data: doc.studyPlan
                }
            )
        }else{
            res.status(404).json({
                error: "Documento no encontrado"
            })
        }
    } catch (error) {
        res.status(500).json({
            error: "Error del servidor"
        })
    }
}

module.exports = controller