const data= require('../data/data');

const indexController = {
    index: function(req, res) {
        res.render('index', {products: data.productos});
      },
    searchresults: function (req, res){
      res.render('search-results');
    },
};

module.exports = indexController;