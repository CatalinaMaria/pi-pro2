const db = require ("../database/models");
const producto = db.Product;
const Usuario = db.Usuario;
//mostrar los datos del usuario que comenta. Si se puede.
let criterio ={
  include: [
        {association: "usuarioProducto"},
        {association: "productoComentarios",
            include: [{association: "usuarioComentario"}]  
        }
      ], 
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
      res.render('product-add');
  },
  addProduct: function (req,res, next){
    let infoProduct = req.body
    if (req.session.userLogueado != undefined){
      let productoNuevo = {
        clienteId: req.session.userLogueado.id,
        imagen: infoProduct.picture,
        nombreProducto: infoProduct.product,
        descripcion: infoProduct.description,
      }
      producto.create(productoNuevo)
      .then(function(product){
        return res.redirect('/')
      })
      .catch(function(error){
        console.log(error);
      })}
      else {
        res.redirect('/users/register')
      }
      
},
};

module.exports = productsController;