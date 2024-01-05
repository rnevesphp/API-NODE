'use strict';

const express = require('express');
const router = express.Router();
var products = require('../data/products.data'); 

const controller = require('../controllers/product.controller'); 

// rota que lista os produtos em uma lista 
router.get('/' , (req, res) => {
   res.send(products);
})

// rotas para acessar os metodos crud usando um controlador
router.post('/add', controller.post);
router.put('/:id', controller.put);
router.delete('/delete/:id',controller.del);

module.exports = router; 