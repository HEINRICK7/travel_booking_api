
const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken');

const Admin = require('../models/Admin')

const authConfig = require('../config/auth.json')


module.exports = {

    async store(req, res){
        const { email, password } = req.body;

        const user = await Admin.findOne({ email }).select('password');

        if( !user )
            return res.status(400).send( {error: 'User not found'});

        if( !await bcrypt.compare(password, user.password))
            return res.status(400).send({ error: ' Invalid password' });   

        user.password = undefined;    

        const token = jwt.sign({ id: user.id }, authConfig.secret, {
            expiresIn: 86400,
        })

        res.send({ user, token });    

    }
}
