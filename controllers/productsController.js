const db = require("../database/models");
const Producto = db.Product;
const Usuario = db.Usuario;
const Comentario = db.Comentario;
//mostrar los datos del usuario que comenta. Si se puede.
let criterio = {
  include: [
    { association: "usuarioProducto" },
    {
      association: "productoComentarios",
      include: [{ association: "usuarioComentario" }]
    }
  ],
}
const productsController = {
  product: function (req, res) {
    let id = req.params.id;
    Producto.findByPk(id, criterio)
      .then(data => {
        // return res.send(data)
        res.render('product', { products: data });
      })

  },
  productadd: function (req, res) {
    res.render('product-add');
  },
  addProduct: function (req, res, next) {
    let infoProduct = req.body
    if (req.session.userLogueado != undefined) {
      let productoNuevo = {
        clienteId: req.session.userLogueado.id,
        imagen: infoProduct.picture,
        nombreProducto: infoProduct.product,
        descripcion: infoProduct.description,
      }
      Producto.create(productoNuevo)
        .then(function (product) {
          return res.redirect('/')
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    else {
      res.redirect('/users/register')
    }

  },
  editar: function (req, res) {
    let ideditar = req.params.id;
    Producto.findByPk(ideditar)
      .then(function (data) {
        // res.send(data)
        res.render('product-edit', { data: data })
      })
  },

  procesarEditar: function (req, res) {
    let ideditar = req.params.id
    let errors = {};
    Producto.findByPk(ideditar)
      .then(data => {
        // return res.send(data)
          let info = req.body
          Producto.update({
            imagen: info.picture,
            nombreProducto: info.product,
            descripcion: info.description
          }, { where: [{ idProducto: ideditar }] })
          res.redirect('/')
      })
      .catch(function (errors) {
        res.send({ errors })
        console.log(errors)
      })
  },

  borrar: function (req, res) {
    let idborrar = req.params.id; // en el formulario no se carga un id por eso pongo params y no .body
    // let criterio = {
    //   include: [
    //     { association: "usuarioProducto" },
    //     {
    //       association: "productoComentarios",
    //       include: [{ association: "usuarioComentario" }]
    //     }
    //   ],
    // }
    Producto.findByPk(idborrar)
      .then(function (data) {
        // res.send(data)
          Producto.destroy({ where: [{ idProducto: id }] })
          res.redirect('/')
        
      })
      .catch(function (errors) {
        console.log(errors)
      })
  },

  comentario: function (req,res) {
    let idProducto = req.params.id;
    let info = req.body.textocomentario;
    // res.send(info)
    Producto.findByPk(idProducto)
    .then(data => {
    // return res.send(data)
      res.render('product', { products: data });
            })
    if (req.session.userLogueado != undefined) {
    let comentarioNuevo = {
      idProducto: idProducto,
      idUsuario: req.session.userLogueado.id,
      commentario: info,
    }
    Comentario.create(comentarioNuevo)
    .then(function (req,res) {
      return res.redirect('/')})
  }else{
    let errors = {};
        errors.message = "Debe hacer login para comentar"
        res.locals.errors = errors;
        return res.render("product", )
        }
  }
};



module.exports = productsController;