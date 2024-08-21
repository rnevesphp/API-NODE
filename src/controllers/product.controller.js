'use strict'

const Product = require('../models/product');
const mongoose = require("mongoose");

exports.post = (req , res) => {
    res.status(200)
    res.send(req.body); 
};

exports.put = (req , res) => {
    const id = req.params.id; // recuperar um parametro pela url
   res.status(200)
   res.send({
      id: id,
      item: req.body
   });
}; 

exports.delete = (req , res) => {
   res.status(200)
   res.send(req.body);
}; 