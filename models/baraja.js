const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const barajaSchema = new Schema({
    nombre: String,
    juego: String,
    lista: String
})

//Creamos el modelo
const Baraja = mongoose.model('Baraja', barajaSchema, "Baraja");

module.exports = Baraja;