'use strict' 

/**
 * importamos o express
 */
const express = require('express'); 

/**
 * declaramos o app e a o router (aplicação principal e rota)
 */
const app = express(); 
const router = express.Router(); 

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
 * atribuimos a rota à aplicação. 
 */
app.use('/',route); 

/**
 * Exportar a aplicação. 
 */
module.exports = app; 