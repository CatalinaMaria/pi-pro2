const data= require('../data/data');
const db = require ("../database/models");
const producto = db.Product;
//mostrar los datos del usuario que comenta. Si se puede.
let criterio ={
  include: [
        {association: "usuarioProducto"},
        {association: "productoComentarios",
           // inlcude: [ {association: "usuarioComentario"} ]  
        }
      ]
}
const productsController = {
  product: function (req, res){
      let id = req.params.id;
      producto.findByPk(id, criterio)
        .then(data=>{
          // return res.send(data)
          res.render('product', {products: data});
        })
      
  },
  productadd: function(req,res){
      res.render('product-add', {usuarios: data.usuarios});
  },
  store: function (req,res){
    let errors = {};
    console.log(req.body);
    if (req.body.product == "") {
      errors.message = "El producto debe tener un nombre";
      res.locals.errors = errors;
      res.render('product-add');
    } else if (req.body.description == "") {
      errors.message = "Debes agregarle una descripción al producto";
      res.locals.errors = errors;
      res.render('product-add');
    }
      else {
        let criterio = {
          where: [{ product: req.body.product }]
        }; producto.findAll(criterio)
        .then(data => {
          errors.message = "Este producto ya existe";
          res.locals.errors = errors;
          res.render('product-add');
        }).catch(error => console.log(error))

        let productonuevo = {
          nombreProducto: req.body.product,
          descripcion: req.body.description,
          
        }
        producto.create(productonuevo);
        res.redirect('/users/myprofile');
      }
},
};

module.exports = productsController;