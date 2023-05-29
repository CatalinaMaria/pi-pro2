const data= require('../data/data');
const db = require ("../database/models");
db.Usuario.findAll({
  incude: [
    {associate: "productoUsuario"},
    {associate: "comentarioUsuario"}
  ]
}).then(resultados=>{
  
})
db.Product.findAll({
  incude: [
    {associate: "usuarioProducto"},
    {associate: "productoComentarios",
      include: ["usuarioComentario"]}
  ]
}).then(resultados=>{

})
const indexController = {
    index: function(req, res) {
        res.render('index', {products: data.productos, comentarios: data.comentarios});
      },
    searchresults: function (req, res){
      res.render('search-results', {products: data.productos, comentarios: data.comentarios});
    },
};

module.exports = indexController;