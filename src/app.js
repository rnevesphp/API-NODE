'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const { urlencoded } = require('express');
const mongoose = require('mongoose')

/* usar para variaveis de entorno */
/* require('dotenv').config(); */
/* const dbURL = process.env.DB_URL; */
/* mongoose.connect(dbURL);  */

const app = express();
const router  = express.Router();

mongoose.connect('mongodb+srv://admin:trokoWrvdLKvsQHX@cluster0.s5s27mc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

const indexRoute = require('./routes/index-route');
const productRoutes = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoutes); 

module.exports = app; 