const mongoose = require('../database');

const TravelSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    city:{
        type: String,
        require: true,
    },
    state:{
        type: String,
        require: true,
    },
    date_initial: {
        type: Date,
        require: true
    },
    date_end: {
        type: Date,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    quant_min: {
        type: Number,
        require: true
    },
    quant_max: {
        type: Number,
        require: true
    },
    quant_day: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true,
    },
    image_url: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    itinerary: [
        {
            
                title: {
                    type: String,
                   
                },
                description: {
                    type: String,
                   
                },
                departure_time: {
                    type: String,
                    
                },
        }
    ],
    admin_id:[{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref:'Admin',
        require: true
    }]
});
const Travel = mongoose.model('Travel', TravelSchema);

module.exports = Travel;