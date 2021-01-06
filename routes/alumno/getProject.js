const controller = require("../../controllers/getOneProyect")
const express = require("express")
const activityController = require("../../controllers/activityToProject")

const router = express.Router()


router.get("/getSinglePro/:titulo", controller)

router.post("/activityToProject", activityController)

module.exports = router