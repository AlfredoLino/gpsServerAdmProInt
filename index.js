const express = require('express')
const app = express()
require('dotenv').config()
app.use(express.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

const mongoose = require('mongoose')
const URI = process.env.mongoURI;
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(con =>{
    console.log('MongoAtlas on')
    const PORT = process.env.PORT
    app.listen(PORT, ()=>{
        console.log(`Listenning from port ${PORT}`)
    })
}).catch(err =>{
    console.log(err)
})

const routes_alumno_create = require('./routes/alumno/create')//--/createAlumno
const routeAlumnLogin = require('./routes/Login/Alumno') //--/login/alumno
const routeCreateProyecto = require('./routes/Profesor/createProject')
const routeProfesorLogin = require('./routes/Login/Profesor')
const routeGetReticulas = require('./routes/get/reticulas')
const routeGetAlumno = require("./routes/get/alumno")
const routeGetProjects = require("./routes/get/proyecto")
const routeGetProjectsAlumno = require("./routes/alumno/getProjects")
const routeGetOneProject = require("./routes/alumno/getProject")
const routeToDownload = require('./routes/Profesor/download')

app.use(routeToDownload)
app.use(routeGetOneProject)
app.use(routeGetProjectsAlumno)
app.use(routeGetProjects)
app.use(routeGetAlumno)
app.use(routeAlumnLogin)
app.use(routeProfesorLogin)
app.use(routes_alumno_create)
app.use(routeCreateProyecto)
app.use(routeGetReticulas)

/*
const data = new reticulaModel(
    {
        dep: "Electronica",
        studyPlan: "IELC-2010-211",
        materias:
        [
            {
                semestre: "7",
                nombre: "Control II",
                compDes: "Interpreta gráficas y aplica métodos de respuesta a la frecuencia para analizar sistemas de control y dispositivos utilizados en eléctrica y electrónica. Aplica los métodos de lugar geométrico de las raíces y de respuesta a la frecuencia para diseñar compensadores que mejoren la respuesta en lazo cerrado de un sistema de control. Utiliza la representación en espacio de estado para modelar y analizar sistemas físicos, y diseñar compensadores que mejoren la respuesta de sistemas de control.",
                compPrev: "Comprende y usa los conceptos básicos de control clásico para el análisis y modelado de sistemas físicos"
            },
            {
                semestre: "7",
                nombre: "Amplificadores Operacionales",
                compDes: "Analiza, simula, diseña, construye y aplica circuitos con amplificadores operacionales y circuitosintegrados lineales para aplicaciones de la electrónica analógica. ",
                compPrev: "Conoce el funcionamiento de otros dispositivos eléctricos y electrónicos, (diodos, transistores, componentes pasivos y activos, sensores y motores)."
            },
            {
                semestre: "7",
                nombre: "Instrumentacion",
                compDes: "Selecciona, aplica, calibra y opera los instrumentos de medición y control para automatizar los procesos industriales, mediante la configuración y programación adecuada de los mismos.",
                compPrev: "Aplica los conocimientos básicos de las diferentes variables físicas como calor, flujo, presión y temperatura para identificar los efectos en los procesos Establece la función de transferencia y analogías entre sistemas físicos para analizar la respuesta del sistema."
            },
            {
                semestre: "7",
                nombre: "Optoelectrónica",
                compDes: "Define los conceptos y teorías que explican la operación de los dispositivos optoelectrónicos para el diseño y construcción de circuitos electrónicos.",
                compPrev: "Aplica la teoría de semiconductores, en el funcionamiento de dispositivos de unión P-N, así como entender el proceso de generación de energía eléctrica en la unión P-N."
            },
            {
                semestre: "7",
                nombre: "Introduccion a las telecomunicaciones",
                compDes: "Desarrolla la capacidad de análisis de los sistemas de comunicaciones electrónicos, que le permitan comprender, operar, instalar y adaptar sistemas de comunicaciones electrónicos basándose en normas nacionales e internacionales. ",
                compPrev: "Aplica técnicas de análisis de circuitos. Comprende los conceptos de potencia eléctrica. Conoce el funcionamiento de amplificación. Conoce el funcionamiento de los multiplexores y demultiplexores. Conoce los conceptos de los codificadores. Conoce el funcionamiento de los decodificadores."
            },
            {
                semestre: "7",
                nombre: "Taller de Investigacion II",
                compDes: "Consolida el protocolo para ejecutar la investigación y obtener productos para su exposición, defensa y gestión de su transcendencia. ",
                compPrev: "Aplica los elementos de la investigación documental para elaborar escritos académicos de su entorno profesional."
            }
        ]
    }
)

data.save().then(doc =>{
    console.log('Elemtro creado')
}).catch(err =>{
    console.log('Elemento no creado')
})
*/

/*
const testDate = new Date("2020-05-12").toISOString()
console.log(new Date(testDate))
*/

/*
const modelProfesor = require('./model/profesor/profesor')

const prof = new modelProfesor({
    email: "profesor@gmail.com",
    password: "password",
    nombre: "Profesor Maestro",
    dep: "ISC"
})
prof.save((err, doc)=>{
    console.log(doc)
})

*/