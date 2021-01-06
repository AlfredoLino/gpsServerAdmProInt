const modelReticula = require('../model/materia/ISC/reticula')

const getReticula = async (req, res)=>{
    try{
        const data = await modelReticula.find({})
        if(data){
            res.status(200).json(
                {
                    data
                }
            )
        }else{
            res.status(404).json(
                {
                    error: "No se encontraron planes de estudio"
                }
            )
        }
    }catch(err){
        res.status(500).json(
            {
                error: "Error del servidor"
            }
        )
    }
}

module.exports = getReticula