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
const router = express.Router(); 

/**
 * bodyParse => pacote do node 
 */
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false })); 

/**
 * criando a rota
 */
const route = router.get('/' , (req, res, next) => {
   res.status(200).send({
      title: "Node Store API", 
      version: "0.0.2"
   }); 
}); 

/**
 * rota para criar ou enviar dados ao bando de dados
 */
const create = router.post('/' , (req, res, next) => {
   res.status(200).send(req.body); 
}); 
/**
 * atribuimos a rota à aplicação. 
 */
app.use('/',route); 
app.use('/products' , create)

/**
 * Exportar a aplicação. 
 */
module.exports = app; 