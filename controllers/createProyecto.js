const modelProyect = require('../model/proyecto/proyectoIntegrador')

const controller = async (req, res)=>{
    try {
        const newProject = new modelProyect
        (
            {...req.body, profResp: req.body.profResp, comments: []}
        )
        console.log('antes de await')
        const data = await newProject.save()
        console.log('DATA', data);
        if(data){
            console.log('dentro de data')
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
        console.log('no-----------------------------')
        res.status(400).json({
            ...error}
        )
    }

}

module.exports = controller

