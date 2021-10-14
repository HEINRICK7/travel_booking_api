
const TravelUser = require('../models/TravelUser');
const TravelAdmin = require('../models/Travel');

module.exports = {

async store(req, res){
    const { travel_id } = req.params;
    const { cpf } = req.body;

    const travel_id = await TravelAdmin.findById({travel_id})
    const user = await TravelUser.findByOne({cpf})
    try {
        if(user && travel_id){
            return res.status(400).send({error: 'Usuario e viagem ja cadastrados'})
        }
        else {
            const travelUser = await TravelUser.create(req.body,travel_id);

            return res.send({ 
                travelUser,
                travel_id
            });
        }
    }
    catch (err){
        return res.status(400).send({ error: 'Registration failed'});
    }
}
}
