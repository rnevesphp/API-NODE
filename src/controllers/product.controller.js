'use strict'

 
exports.post = (req , res) => {
    res.status(200)
    res.send(console.log(req.body)); 
 } ; 