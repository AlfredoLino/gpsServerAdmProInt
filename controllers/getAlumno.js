const model = require("../model/alumno/alumno")
const ncontrolReq = require("../utils/validation/ncontrol")
const controller = async (req, res)=>{
    try {
        const isValid = ncontrolReq.validate({...req.body})
        if(isValid.error){
            const [error] = isValid.error.details
            res.status(401).json(
                {
                    error,
                    msg: "Error en la peticion"
                }
            )
        }else{
            console.log(req.body)
            const data = await model.findOne({ncontrol: req.body.ncontrol})
            
            if(data){
                res.status(200).json(
                    {
                        data
                    }
                )
            }else{
                res.status(404).json({ error: "El alumno no existe xdxd" })
            }
        }
            
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = controller