const data= require('../data/data');

const productsController = {
    product: function (req, res){
        res.render('product', {products: data.productos, comentarios: data.comentarios});
    },
    productadd: function(req,res){
        res.render('product-add', {usuarios: data.usuarios});
    },
};

module.exports = productsController;