const htmlpdf = require('html-pdf')
const model = require('../model/proyecto/proyectoIntegrador')
const fs = require('fs')


const controller = async (req, res)=>{
    
    try {
        const datapro = await model.findOne({tituloProInt: req.param('titulo')})
        if(datapro){
            
        let content = 
    `
    <html>
    <head>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
    </head>
    <style>
        body{
            font-family: 'Lato', sans-serif;
            width: 85%;
            margin: 15px auto;
        }
        td{
            padding: 7px
        }
    </style>
    <body>
        <h1>${datapro.tituloProInt}</h1>
        <p><b>Institución: </b>${datapro.institucion}</p>
        <p><b>Coordinador: </b>${datapro.coordinador}</p>
        <p><b>Colaborador(es): </b>${datapro.colab}</p>
        
        <h3>Departamentos</h3>
        <ul>
            ${datapro.departamentos.map(dep => `<li>
                <b>${dep.dep}: </b>${dep.plan}
            </li>` )}
        </ul>

        <h3>Asignaturas</h3>
        <ul>
            ${datapro.asignaturas.map(asig => `
            <li>    
                <div>
                    
                    <p>Nombre: ${asig.nombre}</p>
                    <p>Semestre: ${asig.semestre}</p>
                    <p>Competencia previa: ${asig.compPrev}</p>
                    <p>Competencia a desarrollar: ${asig.compDes}<p>
                    <table>
                        <thead>
                            <tr>
                                <th scope = "col"> Etapa 1 </th>
                                <th scope = "col"> Etapa 2 </th>
                                <th scope = "col"> Etapa 3 </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>${asig.etapa_one}</td>
                                <td>${asig.etapa_two}</td>
                                <td>${asig.etapa_three}</td>
                            <tr>
                        </tbody>
                    </table>
                <div>
            </li>
            `)}
        </ul>

        <p><b>Area de conocimiento: </b>${datapro.areaConoc}</p>
        <p><b>Tipo de ejecución: </b>${datapro.tipoEjec}</p>
        <p><b>Materia eje: </b>${datapro.materiaEje}</p>
        <p><b>Limites y restricciones: </b>${datapro.limityRest}</p>
        <p><b>Tipo de proyecto: </b>${datapro.tipoProyecto}</p>

        <h3>Actividades</h3>
        <table>
            <thead>
                <tr>
                    <th scope="col">Actividad</th>
                    <th scope="col">Responsable(s)</th>
                    <th scope="col">Fecha de entrega</th>
                </tr>
            </thead>
            <tbody>
                ${datapro.cronograma.map(activity => 
                `
                    <tr>
                        <td>
                            ${activity.nombreActividad}
                        </td>
                        <td>
                            ${activity.responsables.map(res => `/${res}/`)}
                        </td>
                        <td>
                            ${activity.entrega.toISOString().split('T')[0]}
                        </td>
                    </tr>

                `)}
            </tbody>
        </table>
        
    </body>
    </html>
    `;
    htmlpdf.create(content).toFile(`formato-${req.body.tituloProInt}.pdf`, (err, r)=>{
        if(err){
            console.log(err)
            res.json({message : 'tamal'})
        }else{
            res.download(`./formato-${req.body.tituloProInt}.pdf`)
        }
    })
    }
    
    } catch (error) {
        console.log(error)
    }
    

    
    
}

module.exports=controller
