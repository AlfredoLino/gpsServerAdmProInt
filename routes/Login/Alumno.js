const controller = require('../../controllers/loginAlumno')
const express = require('express')
const Router = express.Router()

Router.post("/login/alumno", controller);


module.exports = Router;