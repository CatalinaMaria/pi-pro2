const data= require('../data/data');
const db = require ("../database/models");
const usuario = db.Usuario;
const producto = db.Product;
// const bcrypt= require("bcrypctjs");

const usersController = {
  register: function(req,res){
      res.render('register')
  },
  store: function (req,res){
    let errors = {};
    if (req.body.name == "") {
      errors.message = "El campo nombre está vacío";
      res.locals.errors = errors;
      res.render("register");} else if (req.body.password){
        errors.message = "El campo password está vacío";
        res.locals.errors = errors;
        res.render("register"); //chequear que funcione bien con la ruta /register
      } else {
        let criterio = {
          where: [{ email: req.body.email }]
        }
        User.findAll(criterio)
          .then(data => {
            errors.message = "El email ya existe!";
            res.locals.errors = errors;
            res.render("addUser");
          }).catch(error => console.log(error))
      }

      let passwordEncriptada = bcryptjs.hashSync(req.body.password, 12);
      let user = {
        name: req.body.name,
        email: req.body.email,
        password: passEncriptada
      }
      User.create(user);
      res.redirect('/users');

          res.redirect("/users/myprofile");
},
  login: function (req,res) {
      res.render('login')
  },
  ingresar: (req, res) => {
    let errors = {};
    let info = req.body;
    let filtro={
      where:[{email:info.email}]
    };
    User.findOne(filtro)
    .then(result=>{
      if(result  !=null){
        let check = bcryptjs.compareSync(info.password, result.password);
        if(check){
          req.session.user = result.dataValues;
          req.locals.user = result.dataValues;
          if(info.rememberme){
            res.cookie("userId",result.dataValues.id,{maxAge:1000 *60 *10})
          }
          return res.redirect('/')
        }
        else{
          
          errors.message = "Contraseña no coincide";
          res.locals.errors = errors;
          res.render("addUser");
        }
      }
    })
   
  },
  profile: function (req, res){
    producto.findAll({
      where: [{}],      
      order: [['idProducto', 'ASC']],
      limit: 4,
    }).then(function(data){
      
  res.render('index', {products: data})})  
    res.render('profile' , {usuarios: data.usuarios, products: data.productos, comentarios: data.comentarios})
  },
  edit: function (req,res){
      res.render('profile-edit', {usuarios: data.usuarios})
  },
 
};

usuario.findAll({
    include: [
      {association: "productoUsuario"},
      {association: "comentarioUsuario"}
    ]
  }).then(function(data){console.log(data);})


  
module.exports = usersController;

