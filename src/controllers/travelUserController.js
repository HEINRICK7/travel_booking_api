
const TravelUser = require('../models/TravelUser');
const Travel = require('../models/Travel');


module.exports = {

    async store(req, res){
        const { travel_id } = req.params;
        const { cpf } = req.body;

        try {
            if(!await TravelUser.findOne({cpf})){
                const travelUser = await TravelUser.create(req.body,travel_id);

                    return res.send({ 
                        travelUser,
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
            const travelersUsers = await TravelUser.find().populate('travel_id');

            return res.send({ travelersUsers })
        } 
        catch (error) {

            return res.status(400).send({ error: 'Error loading'});
            
        }
    },
    async show(req, res) {
        try {
            const userId = await TravelUser.findById(req.params._id);

            return res.send({ userId })
        } catch (error) {

            return res.status(400).send({ error: 'Error loading'});
            
        }
    },
    async loadDataByCPF(req, res) {
        
        try {
            const _cpf = req.body.cpf;
            const search = await TravelUser.findOne({cpf:_cpf});
        return res.send({search});    
            
        } catch (error) {

            return res.status(400).send({ error: 'Error loading'});
            
        }
    },
    async destroy(req, res) {
        
        try {
           const travelDestroy = await TravelUser.findByIdAndRemove(req.params._id);
            return res.status(204).send({travelDestroy})
        } catch (error) {

            return res.status(400).send({ error: 'Error deleting'});
            
        }
    }

}
