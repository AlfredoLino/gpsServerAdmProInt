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
app.use(routeAlumnLogin)
app.use(routeProfesorLogin)
app.use(routes_alumno_create)
app.use(routeCreateProyecto)

/*
const testDate = new Date("2020-05-12").toISOString()
console.log(new Date(testDate))
*/
