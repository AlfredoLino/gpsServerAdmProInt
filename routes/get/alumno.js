const express = require("express")
const Router = express.Router()
const controller = require("../../controllers/getAlumno")

Router.post("/getAlumno", controller)

module.exports = Router