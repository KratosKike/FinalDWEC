const express = require('express')
const router = express.Router();
//const Pokemon = require('../models/pokemon');

router.get('/crear', (req, res) => {
    res.render('crear') //Nueva vista que debemos crear
})


router.get('/', async (req, res) =>{
/*
    try {
        //Le pondremos arrayPokemonDB para diferenciar
        //los datos que vienen de la base de datos
        //con respecto al arrayPokemon que tenemos EN LA VISTA
        const arrayPokemonDB = await Pokemon.find();
        console.log(arrayPokemonDB);
        res.render("pokemon", {
            arrayPokemon: arrayPokemonDB
        })
    } catch (error) {
        console.error(error)
    }*/


    /*res.render("pokemon", { //pokemon será el próximo fichero que creemos
        arrayPokemon: [ //Esta información, posteriormente, VENDRÁ DE LA BASE DE DATOS
            {id: 'pk01', nombre: 'Caterpie', tipo: 'Bicho', descripcion:'Es lamentable'},
            {id: 'pk02', nombre: 'Weedle', tipo: 'Bicho', descripcion:'También es lamentable'},
            {id: 'pk03', nombre: 'Magikarp', tipo: 'Agua', descripcion:'Qué cosa más mala'}
        ]
    })*/

})


module.exports = router;
