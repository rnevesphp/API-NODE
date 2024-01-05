'use strict'
 
exports.post = (req , res) => {
    res.status(200)
    res.send(console.log(req.body)); 
};

exports.put = (req , res) => {
    const id = req.params.id; // recuperar um parametro pela url
   res.status(200)
   res.send({
      id: id,
      item: req.body
   });
}; 

exports.del = (req , res) => {
   res.status(200)
   res.send(req.body);
}; 