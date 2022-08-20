const controller = require("../../controllers/getProyectos")
const model = require("../../model/proyecto/proyectoIntegrador")
const express = require("express")
const router = express.Router()

router.post("/getProyectos", controller)
router.post('/postComment', async (req, res) =>{
    const {profResp, _id, payload, get} = req.body
    console.log(profResp, _id, payload, get)
    try {
        if(!_id){
            throw new Error("Faltan parametros")
        }
        if(get){
            const doc = await model.find({_id})
            res.status(201).json({status:201, ok: true,
                data: doc
            })
            return
        }else{
            const doc = await model.findOne({_id})
            doc.comments.push(payload.comment)
            await doc.save()
            res.status(200).json({status:200, ok: true,
                data: doc
            })
            return
        }
        
    } catch (error) {
        res.status(404).json({status:404, ok: false, error})
    }
})

module.exports = router