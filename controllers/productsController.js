const db = require("../database/models");
const Producto = db.Product;
const Usuario = db.Usuario;
const Comentario = db.Comentario;

let criterio = {
  include: [
    { association: "usuarioProducto" },
    {
      association: "productoComentarios",
      include: [{ association: "usuarioComentario" }]
    }
  ],
  order: [[{ model: Comentario, as: 'productoComentarios' }, 'createdAt', 'DESC']]
}
const productsController = {
  product: function (req, res) {
    let id = req.params.id;
    let criteriocomment = {
      where: [{ idProducto: id }],
      include: [{ association: "usuarioComentario" }],
      order: [['idProducto', 'DESC']]
    }

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

    Producto.destroy({ where: { idProducto: idborrar } })
      .then(() => {
        res.redirect('/')
      })
      .catch(function (error) {
        console.log(error)
        res.redirect('/')
      })
  },
  comentario: function (req, res) {
    let idProducto = req.params.id
    if (req.session.userLogueado != undefined) {
      Usuario.findOne({
        where: [{ usuario: req.session.userLogueado.usuario }]
      })
        .then(function (data) {
          let comentario = req.body.textocomentario;
          // console.log(data.id)
          Comentario.create({
            idProducto: idProducto,
            idUsuario: data.id,
            commentario: comentario,
          })
          return res.redirect('/')
        })
    }
    else {
      let errors = {};
      errors.message = "Debe estar logueado para poder comentar"
      res.locals.errors = errors;
      return res.render('product')
    }
  }
};



module.exports = productsController;