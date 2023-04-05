const data= require('../data/data');

const usersController = {
    register: function(req,res){
        res.render('register')
    },
    login: function (req,res) {
        res.render('login')
    },
    profile: function (req, res){
        res.render('profile' , {usuarios: data.usuarios})
    },
    edit: function (req,res){
        res.render('profile-edit', {usuarios: data.usuarios})
    },
};

module.exports = usersController;