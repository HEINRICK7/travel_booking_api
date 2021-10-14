
const TravelUser = require('../models/TravelUser');

module.exports = {

async store(req, res){
    const { cpf } = req.body;

    try {
        if(await TravelUser.findOne({cpf}))
            return res.status(400).send({error: 'Admin already exists'})

            const travelUser = await TravelUser.create(req.body);

            return res.send({ travelUser });

    }
    catch (err){
        return res.status(400).send({ error: 'Registration failed'});
    }
}
}
