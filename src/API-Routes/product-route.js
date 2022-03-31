'use strict';

const express = require('express');
const router = express.Router();

/**
 * rota para criar ou enviar dados ao bando de dados
 */
router.post('/', (req, res, next) => {
   res.status(200).send(req.body);
});

/**
 * rota para edição de um elemento usando o id como parametro pela URL
 */
router.put('/:id', (req, res, next) => {
   const id = req.params.id; // recuperar um parametro pela url
   res.status(201).send({
      id: id,
      item: req.body
   });
});


router.delete('/', (req, res, next) => {
   res.status(200).send(req.body);
});


module.exports = router; 