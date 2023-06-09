const data= require('../data/data');
const db = require ("../database/models");
const usuario = db.Usuario
const producto =db.Product


const indexController = {
    index: function(req, res) {
    usuario.findAll({
      include: [
    {association: "productoUsuario"},
    {association: "comentarioUsuario"}
  ]
    }).then(function(data){console.log(data),
  res.render('index', {products: data.productos, comentarios: data.comentarios});;})
        
      },
    searchresults: function (req, res){
      let resultado=req.params.id;
      let criterio = {where:[{nombreProducto:resultado}]};
      producto.findAll(criterio).then(function(data){
        es.render('search-results', {products: data.productos, comentarios: data.comentarios});
     } ).catch(function(err){console.log(err)})
      
    },
    store: function (req,res){
      console.log(req.body);
      res.redirect("/search-results")
  },
};


module.exports = indexController;