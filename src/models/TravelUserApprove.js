const mongoose = require('../database');

const TravelUserApproveSchema = new mongoose.Schema({
    cpf: {
        type: String,
        require: true,
    },
    nome:{
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
        type: String,
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
    travel_id:[{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref:'Travel',
        require: true
    }]
});
const TravelUserApprove = mongoose.model('TravelUserApprove', TravelUserApproveSchema);

module.exports = TravelUserApprove;