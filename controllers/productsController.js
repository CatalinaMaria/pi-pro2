const data= require('../data/data');
const db = require ("../database/models");
const productsController = {
  product: function (req, res){
      let id = req.params.id;
      res.render('product', {products: data.productos[id], comentarios: data.comentarios});
  },
  productadd: function(req,res){
      res.render('product-add', {usuarios: data.usuarios});
  },
};

  db.Product.findAll({
    include: [
      {associate: "usuarioProducto"},
      {associate: "productoComentarios"}
    ]
  }).then(resultados=>{
    let resultado = productsController
  })


module.exports = productsController;