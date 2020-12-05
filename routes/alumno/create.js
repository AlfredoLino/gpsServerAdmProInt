const express = require('express')
const controller = require('../../controllers/insertAlumno')
const alumnExist = require('../../utils/alumno/alumnExistence')
const Router = express.Router()

Router.post("/createAlumno", alumnExist, controller)

module.exports = Router