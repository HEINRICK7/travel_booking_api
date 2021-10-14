
const TravelUser = require('../models/TravelUser');
const TravelAdmin = require('../models/Travel');
module.exports = {

async store(req, res){
    const { travel_id } = req.params;
    const { cpf } = req.body;

    try {
        if(await TravelUser.findOne({cpf}))
            return res.status(400).send({error: 'Admin already exists'})

            const travelUser = await TravelUser.create(req.body);

            return res.send({ 
                travelUser,
                travel_id
            });

    }
    catch (err){
        return res.status(400).send({ error: 'Registration failed'});
    }
}
}
