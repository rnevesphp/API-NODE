'use strict';

const express = require('express');
const router = express.Router();
var products = require('../data/products.data'); 

const controller = require('../controllers/product.controller'); 


router.get('/' , (req, res) => {
   res.send(products);
})
/**
 * rota para criar ou enviar dados ao banco de dados
 */
 router.post('/add' , (req, res) => {
   res.status(200)
   res.send(req.body);
});

/**
 * rota para edição de um elemento usando o id como parametro pela URL
 */
 router.put('/:id', (req, res) => {
   const id = req.params.id; // recuperar um parametro pela url
   res.status(200)
   res.send({
      id: id,
      item: req.body
   });
});

router.delete('/delete/:id', (req, res) => {
   res.status(200)
   res.send(req.body);
});

module.exports = router; 