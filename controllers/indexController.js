const db = require ("../database/models");
const usuario = db.Usuario;
const producto =db.Product;
const op = db.Sequelize.Op;



const indexController = {
    index: function(req, res) {
      let criterio ={
        include: [
      {association: "usuarioProducto"},
      {association: "productoComentarios"}
    ]
      }
    producto.findAll(criterio,{
      order: [['idProducto', 'DESC']],
      limit: 12,
    }).then(function(data){
      // res.send(data)
      
  res.render('index', {products: data})})
        
      },
    searchresults: function (req, res){
      let search = req.query.search;
     
      let relaciones = {include: [{association: "usuarioProducto"},] }
      producto.findAll({
        where: [{nombreProducto: {[op.like]:"%"+search+"%"}}],
      }, relaciones)
      .then(products=> {
        // return res.send(products)
        if (products){
          res.render ('search-results', {products: products})
        }
      } ).catch(function(err){console.log(err)})
}}


module.exports = indexController;