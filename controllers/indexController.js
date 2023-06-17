const db = require("../database/models");
const usuario = db.Usuario;
const producto = db.Product;
const op = db.Sequelize.Op;


const indexController = {
  index: function (req, res) {
    let criterio = {
      include: [
        { association: "usuarioProducto" },
        { association: "productoComentarios" }],
      order: [['idProducto', 'DESC']],
      limit: 12
    }
    producto.findAll(criterio, {
    }).then(function (data) {
      // return res.send(data)
      res.render('index', { products: data })
    })

  },
  searchresults: function (req, res) {
    let search = req.query.search;
    producto.findAll({
      where: {
        [op.or]: [
          { nombreProducto: { [op.like]: "%" + search + "%" } },
          { descripcion: { [op.like]: "%" + search + "%" } }]
      },
      include: [{ association: "usuarioProducto" },],
      order: [['createdAt', 'DESC']]
    })
      .then(products => {
        // return res.send(products)
        if (products) {
          res.render('search-results', { products: products })
        }
      }).catch(function (err) { console.log(err) })
  }
}


module.exports = indexController;