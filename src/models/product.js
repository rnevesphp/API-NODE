'use strict'

const mongoose = require('mongoose')
const { Schema } = mongoose.Schema;

const Product = new Schema(
  {
    title : {
      type : String,
      required : true,
      trim: true
    }, 
    slug : { 
      type : String, 
      required : true,
      trim : true, 
      index : true, 
      unique : true
    }, 
    description : { 
      type : String,
      required : true,
    }, 
    price : { 
      type : Number,
      required: true
    }, 
    active : {
      type : Boolean,
      default : true,
      required: true
    },
    tags : [
      {
        type: String, 
        required: true
      }
    ]
  }
); 

const productModel = mongoose.model('Product', Product);

module.exports = Product; 
