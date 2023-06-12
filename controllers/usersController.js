const data= require('../data/data');
const db = require ("../database/models");
const usuario = db.Usuario;
const producto = db.Product;
//const bcryptjs= require('bcrypctjs');

const usersController = {
  profile: function (req, res){ //relacion con perfiles y comentarios
    let id= req.params.id
    let relaciones = {
      include: [
        {association: "productoUsuario", include: [{association: 'comentarios'}]},
        {association: "comentarioUsuario" }
      ]
    }
    usuario.findByPk(id, relaciones)
    .then(function(data){
      return res.render('profile', {data:data})
    }) .catch (function(error){
      console.log(error)
    })
  },
  editar:function(req, res){ //editar el usuario
    let id = req.params.id
    usuario.findByPk(id)
    .then(function(data){
      return res.render('profile-edit', {data:data})
    })
  } ,
  editarPost: function(req, res){ //editar el post
    let id = req.body.id

    usuario.findByPk (id) 
    .then(function (data) {
        if (req.session.idUser == data.id) {
            usuario.update({
                email: req.body.mail,
                usuario: req.body.nombre,
                password:req.body.contrasenia,
                fecha: req.body.fechanacimiento,
                foto: req.body.fotoperfil,
                
            },{where: [{id: id}]})
            res.redirect('/')
        }
        else {
            let errors = {}
            errors.message = "No se puede editar este perfil"
            res.locals.errors = errors; 
            return res.render('profile-edit', {data:data})
        }
 
    })
    .catch (function (error) {
        res.send({error})
        console.log(error);
    })
},
index: function (req,res){  
    res.render("register")
},

  register: function(req,res){ //registro
      res.render('register')
  },
  store: function (req,res){
    let errors = {}; //para almacenar el error
    if (req.body.name == " ") {
      errors.message = "El campo email está vacío";
      res.locals.errors = errors;
      res.render("register");} 
      
      else if (req.body.password){
        errors.message = "El campo password está vacío";
        res.locals.errors = errors;
        res.render("register"); 
      } 
      
      else {
        let criterio = {
          email: req.body.email
        }
        usuario.findOne({where: [criterio]})
          .then(data => {
            if(data != null){
              errors.message = "El email ya existe!";
              res.locals.errors = errors;
              res.render("register");
            }
            else {
              let passEncriptada = bcryptjs.hashSync(req.body.pass,12);
              let user= {
                name: req.body.nombre,
                email: req.body.mail,
                contraseña: passEncriptada,
                fecha: req.body.fechanacimiento,
                fotoPerfil: req.body.fotoperfil
              }
              console.log(user);
              usuario.create(user);
              res.redirect('/users/login')
            }
            
          }).catch(error => console.log(error))
      }
},

login: function (req,res) { //login
if(req.session.user != undefined){
  return res.redirect('/')
} else {
  return res.render("login")
}
  },

  ingresar: (req, res) => {
    let errors = {};
    let info = req.body;
    let filtro={
      where:[{email:info.email}]
    };
    User.findOne(filtro)
    .then(result=>{
      if(result  == null){
        errors.message = 'El usuario no existe';
        res.locals.errors = errors;
        return res.render('login') }
      else {
        let check = bcryptjs.compareSync(password, result.password);
        if(check){
          req.session.user = result.usuario;
          req.locals.id = result.id;
          if(rememberMe){
            res.cookie("userId",result.dataValues.id,{maxAge:1000 *60 *10})
          }
          return res.redirect('/')
        }
        else{
          
          errors.message = "Contraseña no coincide";
          res.locals.errors = errors;
          res.render("register");
        }
      }
    })
   
  },
  logout: function (req, res) { //logout
    req.session.destroy() ,
    res.clearCookie("userId", result.dataValues, id,{maxAge:1000 *60 *10} )
    res.redirect('register')
  },
  
};

usuario.findAll({
    include: [
      {association: "productoUsuario"},
      {association: "comentarioUsuario"}
    ]
  }).then(function(data){console.log(data);})


  
module.exports = usersController;