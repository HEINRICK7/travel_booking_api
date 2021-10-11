
const Travel = require('../models/Travel');
const Admin = require('../models/Admin');


module.exports = {

    async store(req, res){
        const { name, city, state, date_initial, date_end, departure_time, price, quant_min, quant_max, quant_day, description, image_url } = req.body;

        try {
            if (await Travel.findOne({ date_initial }))
                return res.status(400).send({ error: 'Travel Boocking already exists' });

                const travel_booking = await Travel.create({
                    name,
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
                    image_url,
                    
                    
                });

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
    
 /*
    async show(req, res) {
        const { _id } = req.parms;
        try {
            const userId = await Travel.findById(_id);
            
            return res.send({ userId })
        } catch (error) {

            return res.status(400).send({ error: 'Error loading'});
            
        }
    },
   
    async update(req, res) {
        try {
          const {
            matricula,
            nome,
            data_nasc,
            cpf,
            rg,
            uf_servidor,
            endereco,
            bairro,
            cidade,
            cep,
            escolaridade,
            pis_pasep,
            est_civil,
            nome_conjuge,
            tel_residencial,
            tel_celular,
            email,
            ome_dependentes,
            orgao_empregador,
            municipio,
            uf,
            data_admissao,
            telefone,
            secretaria,
            departamento,
            carga_horaria,
            funcao,
            salario_base} = req.body;

            const user_servidor = await Travel.findByIdAndUpdate(req.params.userId, {
                matricula,
                nome,
                data_nasc,
                cpf,
                rg,
                uf_servidor,
                endereco,
                bairro,
                cidade,
                cep,
                escolaridade,
                pis_pasep,
                est_civil,
                nome_conjuge,
                tel_residencial,
                tel_celular,
                email,
                ome_dependentes,
                orgao_empregador,
                municipio,
                uf,
                data_admissao,
                telefone,
                secretaria,
                departamento,
                carga_horaria,
                funcao,
                salario_base
            }, {new: true});
            
            await user_servidor.save();

            return res.send({user_servidor})    
        } catch (error) {
            return res.status(400).send({error: 'Error update '});
        }
    },
    async destroy(req, res) {
        try {
           await Travel.findByIdAndRemove(req.params.userId);
            return res.send()
        } catch (error) {

            return res.status(400).send({ error: 'Error deleting project'});
            
        }
    }
*/
}
