const express = require('express')
const router = express.Router()
const controllerReticula = require('../../controllers/getReticula')
const controllerPlan = require("../../controllers/getPlan")

router.get("/reticulas", controllerReticula)

router.post("/plan", controllerPlan)
module.exports = router