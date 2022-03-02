//Peticionnes
const express = require('express')
const bodyParser = require('body-parser')
//Variables
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require('dotenv').config()

//Puerto a utilizar
const port = process.env.PORT || 3000


//conexion BD
const mongoose = require('mongoose');

const user = 'kratoskike2';
const password = 'pLbeq0mkvQNaSfBd';
const dbname = 'Baraja';
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.ejzjw.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`

mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
    .then(()=> console.log('Base de datos barajas conectada'))
    .catch(e => console.log(e))

//Motor de plantillas
app.set('view engine', 'ejs')
app.set('views',__dirname + '/views')

//Peticiones Archivos estaticos
app.use(express.static(__dirname+'/public'))

//Llamadas a las rutas desde router
app.use('/', require('./router/rutas'));
app.use('/barajas', require('./router/barajas'));
app.use('/registro', require('./router/registro'));



//Rutas
//Peticion para cuando estes en la raiz, lance x
app.get('/', (req, res) => {
    console.log(__dirname)
    //res.send('Hello World!')
    res.render("index",{titulo : "mi titulo dinamico"})

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
