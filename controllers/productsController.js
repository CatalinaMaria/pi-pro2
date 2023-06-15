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
editar: function(req,res){
producto.findByPk(req.params.idProducto)
.then(function(data){
  res.render('product-edit',{data: data} )
})
},

procesarEditar: function(req,res){
  let id = req.params.idProducto

producto.findByPk(id)
.then(function(data){
  if (req.session.userLogueado == data.usuario){ //tiene que coinsidir clienteId == req.session.userLogueado.id, pero cuando lo camibio me sale error port 3000 already in use

    producto.update({
      fotoProducto : req.body.picture,
      nombreProducto: req.body.product,
      descripcion: req.body.description
    }, {where: [{id: id}]})
    res.redirect('/')
  } else{
    let errors = errors;
    res.locals.errors = errors;
    return res.render('product-edit', {data: data, comentarios: data.comentarios})
  }
})
.catch(function(errors){
 res.send({errors})
 console.log(errors)
})
},

borrar: function (req, res){
let idProducto = req.params.idProducto // en el formulario no se carga un id por eso pongo params y no .body
let criterio ={
  include: [
        {association: "usuarioProducto"},
        {association: "productoComentarios",
            include: [{association: "usuarioComentario"}]  
        }
      ], 
    }
producto.findByPk(idProducto, criterio)
.then(function(data){
  if( req.session.usuario == data.usuario) { //mismo error con la condicion
    producto.destroy({where: [{id: id}]})
    res.redirect('/')
  }
  else{
    let errors = {};
    errors.message = "Este producto no puede ser eliminado"
    res.locals.errors = errors;
    return res.reder('product', {data: data, comentarios: data.comentarios})
  }
})
.catch(function (errors){
  console.log(errors)
}) 
},
};

module.exports = productsController;