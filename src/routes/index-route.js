'use strict';

const express = require('express');
const router = express.Router();

// criando a rota principal ou root/raiz

const ApiMainRoute = router.get('/', (req, res) => {
   res.status(200).send({
      title: "Node Store API",
      version: "0.1.0"
   });
});

module.exports = ApiMainRoute;    