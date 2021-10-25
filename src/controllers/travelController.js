require('multer');

const Travel = require('../models/Travel')


module.exports = {
   
    async store(req, res){
        const {originalname: name, size, key, location: url=''} = req.file;
        const { name_package, city, state, date_initial, date_end, departure_time, price, quant_min, quant_max,quant_day, description, itinerary} = req.body;
        const { title, description_itinerary, departure_time_itinerary } = itinerary;

        try {
           
            const travel_booking = await Travel.create(
                {
                    name_package,
                    city, 
                    state,
                    date_initial,
                    date_end,
                    departure_time,
                    price,
                    quant_min,
                    quant_max,
                    quant_day,
                    description,
                    itinerary: {
                        title,
                        description_itinerary,
                        departure_time_itinerary
                    },
                    file: {
                        name,
                        size,
                        key,
                        url
                    }
    
                }
            );
           
            return res.send({travel_booking});

        } 
        catch (error) {
            return res.status(400).send({ error: 'Registration failed'});

        }
        

    },

    async index(req, res) {
        try {
            const travelers = await Travel.find();

            return res.send({ travelers })
        } catch (error) {

            return res.status(400).send({ error: 'Error loading'});
            
        }
    },
    
 
    async show(req, res) {
        
        try {
            const travel = await Travel.findById({ _id: req.params._id });
            
            return res.send({travel})
            
        } catch (error) {

            return res.status(400).send({ error: 'Error loading'});
            
        }
    },
}   