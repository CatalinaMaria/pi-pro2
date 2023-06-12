const db = require ("../database/models");
const usuario = db.Usuario;
const producto =db.Product;
const op = db.Sequelize.op;


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
      let search = req.query.search;
      console.log(search)
      producto.findAll({
        where: {
          [op.or] : [
            {producto: {[op.like]: `%${search}%`}},
            {desripcionProducto: {[op.like]: `%${search}%`}},
          ]
        },
        order: ['createdAt', 'DESC'],
        include: [
          {association: "productoUsuario"},],
      })
      .then(products=> {
        if (products){
          res.render ('search-results', (products, search))
        }
      } )
          
    },
    store: function (req,res){
      console.log(req.body);
      res.redirect("/search-results")
  },
};


module.exports = indexController;