const controller = require("../../controllers/getProyectosAlumno")

const express = require("express")
const router = express.Router()

router.get("/getProjectsAlumno/:ncontrol", controller)

module.exports = router