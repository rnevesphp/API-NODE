const crypto = require('crypto'); 



var products = [
    {
        id: crypto.randomUUID(), 
        name: "Product 1",
        price: 20,
        inStock: true,
        category : "Smartphone"
    } , 
    {
        id : crypto.randomUUID(),
        name : 'Product 2',
        price : 35,
        inStock : false,
        category : "Laptop"
    } , 
    {
        id : crypto.randomUUID() ,
        name : 'Product 3' ,
        price : 47 ,
        inStock : true ,
        category : "TV"
    }, 
    {
        id : crypto.randomUUID(), 
        name : `Product 4` ,
        price : 69 ,
        inStock : false ,
        category : "Furniture"
    }
]

module.exports = products; 
