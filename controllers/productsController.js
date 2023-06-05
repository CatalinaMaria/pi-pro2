const data= require('../data/data');
const db = require ("../database/models");
const producto = db.Product
const productsController = {
  product: function (req, res){
      let id = req.params.id;
      res.render('product', {products: data.productos[id], comentarios: data.comentarios});
  },
  productadd: function(req,res){
      res.render('product-add', {usuarios: data.usuarios});
  },
};

producto.findAll({
  include: [{association: 'usuarioProducto'}, 
  {association: 'productoComentarios'}]
})


module.exports = productsController;