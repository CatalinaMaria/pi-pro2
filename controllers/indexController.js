const data= require('../data/data');
const db = require ("../database/models");
const indexController = {
    index: function(req, res) {
        res.render('index', {products: data.productos, comentarios: data.comentarios});
      },
    searchresults: function (req, res){
      res.render('search-results', {products: data.productos, comentarios: data.comentarios});
    },
};

module.exports = indexController;