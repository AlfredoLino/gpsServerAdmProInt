const validationLogin = require("../utils/validation/loginValidation")
const jwt = require('jsonwebtoken')
const checkCredentials = require('../utils/validation/passemail')
const alumnModel = require('../model/alumno/alumno')

const loginController = async (req, res) => {

    try {
        const isValid = validationLogin.validate({ ...req.body })
        if (isValid.error) {
            const [error] = isValid.error.details
            res.status(401).json({
                error: error.message,
                sta: "error"
            })
        } else {
            const data = await alumnModel.findOne({email: req.body.email})
            
            if (data && checkCredentials(req.body.email, req.body.password, data.email, data.password)) {
                
                const token = jwt.sign({ email: req.body.email }, process.env.JWTKEY)
                return res.status(201).json({ token })
                
            }
            res.status(404).json(
                {
                    error: "No hay usuario con dichas credenciales",
                    msg: "No es posible iniciar sesion"
                }
            )
            
        }
    } catch (e) {
        console.log(e)
    }

}



module.exports = loginController