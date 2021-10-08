const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://travel:travel@cluster0.bnncd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect( mongoURI, 
{   
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
    useNewUrlParser: true }) 
.then(() => console.log("MongoDB connected")) 
.catch((err) => console.log(err));


mongoose.Promise = global.Promise;

module.exports = mongoose;