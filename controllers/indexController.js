const db = require ("../database/models");
const usuario = db.Usuario;
const producto =db.Product;


const indexController = {
    index: function(req, res) {
      let criterio ={
        include: [
      {association: "productoUsuario"},
      {association: "comentarioUsuario"}
    ]
      }
    producto.findAll({
      order: [['idProducto', 'ASC']],
      limit: 12,
    }).then(function(data){
      
  res.render('index', {products: data})})
        
      },
    searchresults: function (req, res){
      let resultado=req.params.id;
      let criterio = {where:[{nombreProducto:resultado}]};
      producto.findAll(criterio).then(function(data){
        return res.render('search-results', {products: data});
     } ).catch(function(err){console.log(err)})
      
    },
    store: function (req,res){
      console.log(req.body);
      res.redirect("/search-results")
  },
};


module.exports = indexController;