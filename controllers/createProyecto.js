const modelProyect = require('../model/proyecto/proyectoIntegrador')

const controller = async (req, res)=>{
    try {
        const newProject = new modelProyect
        (
            {...req.body}
        )

        const data = await newProject.save()
        if(data){
            return res.status(201).json(
                {
                    msg: "Elemento creado"
                }
            )
        }
        res.status(400).json(
            {
                error: "Error al crear el elemento"
            }
        )
    }catch(error) {
        res.status(400).json({
            ...error}
        )
    }

}

module.exports = controller

