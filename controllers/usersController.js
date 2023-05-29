const data= require('../data/data');
const db = require ("../database/models");
const usersController = {
    register: function(req,res){
        res.render('register')
    },
    login: function (req,res) {
        res.render('login')
    },
    profile: function (req, res){
        res.render('profile' , {usuarios: data.usuarios, products: data.productos, comentarios: data.comentarios})
    },
    edit: function (req,res){
        res.render('profile-edit', {usuarios: data.usuarios})
    },
};

module.exports = usersController;