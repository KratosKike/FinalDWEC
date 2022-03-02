const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
    nombre: String,
    juego: String,
    lista: String
})

//Creamos el modelo
const Pokemon = mongoose.model('Decks', pokemonSchema, "Baraja");

module.exports = Pokemon;