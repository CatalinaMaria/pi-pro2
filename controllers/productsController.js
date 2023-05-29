const data= require('../data/data');
const db = require ("../database/models");
db.Usuario.findAll({
    incude: [
      {associate: "productoUsuario"},
      {associate: "comentarioUsuario"}
    ]
  }).then(resultados=>{
    
  })
  db.Comentario.findAll({
    incude: [
      {associate: "comentarioDeProducto"},
      {associate: "usuarioComentario"}
    ]
  }).then(resultados=>{
    
  })
  db.Product.findAll({
    incude: [
      {associate: "usuarioProducto"},
      {associate: "productoComentarios"}
    ]
  }).then(resultados=>{
  
  })
const productsController = {
    product: function (req, res){
        let id = req.params.id;
        res.render('product', {products: data.productos[id], comentarios: data.comentarios});
    },
    productadd: function(req,res){
        res.render('product-add', {usuarios: data.usuarios});
    },
};

module.exports = productsController;