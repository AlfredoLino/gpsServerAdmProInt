const controller = require("../../controllers/getProyectos")
const express = require("express")
const router = express.Router()

router.post("/getProyectos", controller)

module.exports = router