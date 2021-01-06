const model = require("../model/proyecto/proyectoIntegrador")

const controller = async (req, res) =>{
    const { ncontrol } = req.params
    try {
        const request = await model.find({alumnos: {$elemMatch:{ ncontrol }}})
        if(request){
            res.status(200).json(
                request
            )
        }else{
            console.log("no encontrado")
        }
    } catch (error) {
        console.log("error")
    }
}

module.exports = controller