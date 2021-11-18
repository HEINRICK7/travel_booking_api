
const TravelUserApprove = require('../models/TravelUserApprove');
const Travel = require('../models/Travel');


module.exports = {

    async store(req, res){
        const { travel_id } = req.params;
        

        try {
            if(!await TravelUserApprove.findById(req.params._id)){
                const travelUserApprove = await TravelUserApprove.create(req.body,travel_id);

                    return res.send({ 
                        travelUserApprove,
                        travel_id
                    });
            }else{
                
                return res.status(400).send({error: 'Admin already exists'})
            }
        }
        catch (err){
            return res.status(400).send({ error: 'Registration failed'});
        }
    },
    
    async index(req, res) {
        try {
            const travelersUsers = await TravelUserApprove.find().populate('travel_id');

            return res.send({ travelersUsers })
        } 
        catch (error) {

            return res.status(400).send({ error: 'Error loading'});
            
        }
    },

    /*
    async show(req, res) {
        try {
            const userId = await TravelUser.findById(req.params._id);

            return res.send({ userId })
        } catch (error) {

            return res.status(400).send({ error: 'Error loading'});
            
        }
    },
    */
    async destroy(req, res) {
        
        try {
           const travelDestroy = await TravelUserApprove.findByIdAndRemove(req.params._id);
            return res.status(204).send({travelDestroy})
        } catch (error) {

            return res.status(400).send({ error: 'Error deleting'});
            
        }
    }
}
