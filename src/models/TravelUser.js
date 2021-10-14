const mongoose = require('../database');

const TravelUserSchema = new mongoose.Schema({
    cpf: {
        type: String,
        require: true,
    },
    name:{
        type: String,
        require: true,
    },
    data_nasc:{
        type: String,
        require: true,
    },
    telefone: {
        type: String,
        require: true
    },
    cidade: {
        type: Date,
        require: true
    },
    
    bairro: {
        type: String,
        require: true
    },
    rua: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
const TravelUser = mongoose.model('TravelUser', TravelUserSchema);

module.exports = TravelUser;