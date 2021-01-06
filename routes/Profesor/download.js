const controller = require('../../controllers/getActivity')

const express = require('express')
const router = express.Router()
router.get("/download", controller)

module.exports = router