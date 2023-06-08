const data= require('../data/data');
const db = require ("../database/models");
const usuario = db.Usuario


const indexController = {
    index: function(req, res) {
        res.render('index', {products: data.productos, comentarios: data.comentarios});
      },
    searchresults: function (req, res){
      res.render('search-results', {products: data.productos, comentarios: data.comentarios});
    },
    store: function (req,res){
      console.log(req.body);
      res.redirect("/search-results")
  },
};

usuario.findAll({
  include: [
    {association: "productoUsuario"},
    {association: "comentarioUsuario"}
  ]
}).then(function(data){console.log(data);})

module.exports = indexController;