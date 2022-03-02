const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nombre: String,
    pass: String,
    email: String
})

//Creamos el modelo
const User = mongoose.model('Users', userSchema, "Users");

module.exports = User;