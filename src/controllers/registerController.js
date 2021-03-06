
const Admin = require('../models/Admin');

module.exports = {

async store(req, res){
    const { email } = req.body;

    try {
        if(await Admin.findOne({email})){
            return res.status(400).send({error: 'Admin already exists'})
        }
        else {

            const admin = await Admin.create(req.body);

            admin.password = undefined;


            return res.send({ admin });
        }

    }
    catch (err){
        return res.status(400).send({ error: 'Registration failed'});
    }
}
}
