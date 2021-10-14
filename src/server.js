const express = require('express');
const morgan = require('morgan');
const router = require('./routes');
const cors = require('cors');

require('./database/index');

const app = express();

app.use(cors('*'))
app.use(express.json());
app.use(morgan('dev'));
app.use(router);


const port = process.env.PORT || 3333;


app.listen( port, (err)=>{
    if(err){
        console.log(err);
    }else{
         console.log(`connected server http://localhost:${port}`);
    }     
})
