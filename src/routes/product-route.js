'use strict';

const express = require('express');
const router = express.Router();

const controller = require('../controllers/product.controller'); 

// rota que lista os produtos em uma lista 
router.get('/' , (req, res) => {
   res.send('teste');
})

// rotas para acessar os metodos crud usando um controlador
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/',controller.delete);

module.exports = router; 