const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URL

mongoose.connect( mongoURI, 
{   
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
    useNewUrlParser: true }) 
.then(() => console.log("MongoDB connected")) 
.catch((err) => console.log(err));


mongoose.Promise = global.Promise;

module.exports = mongoose;