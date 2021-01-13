const htmlpdf = require('html-pdf')
const fs = require('fs')


const controller = (req, res)=>{
    
    const content = 
    `
    <html>
    <head>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
    </head>
    <style>
        body{
            font-family: 'Lato', sans-serif;
            width: 85%;
            margin: 15px auto;
        }
    </style>
    <body>
        <h1>Clasificacion de manos de Poker</h1>
        ${req.body.asignaturas.map(asig => `Esto es un template string: ${asig.nombre} compDes:${asig.compDes}`)}
    </body>
    </html>
    `
    htmlpdf.create(content).toFile(`formato-${req.body.tituloProInt}.pdf`, (err, r)=>{
        if(err){
            console.log(err)
            res.json({message : 'tamal'})
        }
    })
}

module.exports=controller