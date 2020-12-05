const alumnModel = require('../../model/alumno/alumno')

const alumnExist = (req, res, next)=>{
    const {email} = req.body
    alumnModel.findOne({ email }).then(data =>{
        console.log(data)
        if (data == null) {
          next();
        }else{
            return res.status(401).json({message : 'alumno en existencia'})
        }
    }).catch(err => {
        return res.status(401).json(err)
    })
}

module.exports = alumnExist;