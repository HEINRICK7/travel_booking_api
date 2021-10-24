require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require("path");
const cors = require('cors');

const router = require('./routes.js');

require('./database/index');


const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(router);

app.use(
    "/files",
    express.static(path.resolve(__dirname, "..", "tmp", "uploads"))
  );
  
  
app.listen(process.env.PORT || 3333);


