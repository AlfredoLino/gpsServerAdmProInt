const express = require('express')
const controller = require('../../controllers/createProyecto')

const Router = express.Router()

Router.post("/createProyecto", controller)

module.exports = Router