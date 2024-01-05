'use strict'

/**
 * importamos o express
 */
const express = require('express');
const bodyParser = require('body-parser');
const { urlencoded } = require('express');

/**
 * declaramos o app e a o router (aplicação principal e rota)
*/
const app = express();
const router  = express.Router();

/**
 * importamos as rotas externas
*/

// mainRoute é a rota principal 
const mainRoute = require('./routes/index-route');
const productRoutes = require('./routes/product-route');

/**
 * bodyParse.json() => converte todo o conteúdo em  JSON
 * bodyParse.urlencoded() => se usa para codificar todas as url's usadas exemplo: 
 * ao digitar um 'espaço' na url ele converte o caractere espaço em '%20' . 
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * atribuimos a rota à aplicação. 
*/
app.use('/', mainRoute);
app.use('/products', productRoutes); 

/**
 * Exportar a aplicação. 
*/
module.exports = app; 