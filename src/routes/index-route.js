'use strict';

const express = require('express');
const router = express.Router();

/**
 * criando a rota principal ou root
 */

const route = router.get('/', (req, res) => {
   res.status(200).send({
      title: "Node Store API",
      version: "0.0.3"
   });
});

module.exports = router;   