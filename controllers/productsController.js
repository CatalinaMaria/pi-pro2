const productsController = {
    product: function (req, res){
        res.render('product')
    },
    productadd: function(req,res){
        res.render('product-add')
    },
};

module.exports = productsController;