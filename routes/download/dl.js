const controller = require('../../controllers/renderHtmlToPDF')

const express = require('express')
const router = express.Router()

router.post('/format-download', controller)

module.exports = router