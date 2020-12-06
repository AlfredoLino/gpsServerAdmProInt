const modelProyect = require('../model/proyecto/proyectoIntegrador')

const controller = async (req, res)=>{
    const 
    {
        instituciones,
        depAcademic,
        title,
        coordinador,
        semestre,
        colabs,
        profResp,
        estudiantes,
        cliente,
        planEstudio,
        periodo,
        areaConoc,
        tipoEjecucion,
        tituloProyecto,
        tipoProyecto,
        plantProInt,
        justificacion,
        alcances,
        limitRes,
        cronograma,
        impactoProyecto,
        producto,

    } = req.body

    try {
        const req = new modelProyect
        (
            {
                instituciones,
                depAcademic,
                title,
                coordinador,
                semestre,
                colabs,
                profResp,
                estudiantes,
                cliente,
                planEstudio,
                periodo,
                areaConoc,
                tipoEjecucion,
                tituloProyecto,
                tipoProyecto,
                plantProInt,
                justificacion,
                alcances,
                limitRes,
                cronograma,
                impactoProyecto,
                producto,
            }
        )

        const data = await req.save()
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
        res.status(400).json(
            error
        )
    }

}

module.exports = controller

