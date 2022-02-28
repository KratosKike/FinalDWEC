//Peticionnes
const express = require('express')
//Variables
const app = express()
//Puerto a utilizar
const port = process.env.PORT || 3000

//Motor de plantillas
app.set('view engine', 'ejs')
app.set('views',__dirname + '/views')

//Peticiones Archivos estaticos
app.use(express.static(__dirname+'/public'))

//Rutas
//Peticion para cuando estes en la raiz, lance x
app.get('/', (req, res) => {
    console.log(__dirname)
    //res.send('Hello World!')
    res.render("index",{titulo : "mi titulo dinamico"})

})

//Peticion para cuando estes en /contacto, lance x
app.get('/contacto', (req, res) => {
    res.send('Contacto')
  })

//peticion para controlar error 404
app.use((req, res) => {
    //res.status(404).sendFile(__dirname + "/public/404.html")
    res.status(404).render("404",{
        titulo: "Error 404",
        descripcion : "Page Not Found"
    })
})



//Escuchar al puerto indicado
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
