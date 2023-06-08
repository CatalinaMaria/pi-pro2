const data= require('../data/data');
const db = require ("../database/models");
const usuario = db.Usuario;
const bcrypt= require("bcrypctjs");
let contraEncriptada= bcrypt.hashSync(// acá iría lo que viene del formulario);
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
  store: function (req,res){
    console.log(req.body);
    res.redirect("/users/myprofile");
},
};

usuario.findAll({
    include: [
      {association: "productoUsuario"},
      {association: "comentarioUsuario"}
    ]
  }).then(function(data){console.log(data);})

  usuario.create({
    id:,
    email:,
    contraseña: contraEncriptada,
    fotoPerfil:,
    fecha:,
    dni: ,
    createdAt:,
    updatedAt: ,
    deletedAt:,
  });
  
module.exports = usersController;

