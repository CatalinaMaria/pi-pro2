const db = require("../database/models");
const Usuario = db.Usuario;
const producto = db.Product;
const bcryptjs = require('bcryptjs');

const usersController = {
  profile: function (req, res, next) { //relacion con perfiles y comentarios
    let user = req.params.user
    let relaciones = {
      include: [
        { association: "productoUsuario", include: [{ association: 'productoComentarios' }] },
        { association: "comentarioUsuario" }
      ],
      order: [[{ model: producto, as: 'productoUsuario' }, 'createdAt', 'DESC']]
    }

    Usuario.findByPk(user, relaciones)
      .then(function (data) {
        // res.send(data)
        return res.render('profile', { data: data, user: user, products: data.productoUsuario });
      }).catch(function (error) {
        console.log(error)
      })
  },
  


  register: function (req, res) { //registro
    res.render('register')
  },
  store: function (req, res) {
    //res.send({data: req.body})
    let errors = {}; //para almacenar el error
    if (req.body.mail == "") {
      errors.message = "El campo email está vacío";
      res.locals.errors = errors;
      res.render("register");
    }

    else if (req.body.usuario == "") {
      errors.message = "El campo usuario está vacío";
      res.locals.errors = errors;
      res.render("register");
    }

    else if (req.body.password < 3) {
      errors.message = "Hay un error, el campo password debe tener 3 o mas caracteres";
      res.locals.errors = errors;
      res.render("register")
    }

    else {
      let criterio = {
        email: req.body.mail
      }
      Usuario.findOne({ where: [criterio] })
        .then(data => {
          if (data != null) {
            errors.message = "El email ya existe!";
            res.locals.errors = errors;
            res.render("register");
          }
          else {
            let passEncriptada = bcryptjs.hashSync(req.body.password, 12);
            let user = {
              usuario: req.body.usuario,
              email: req.body.mail,
              contraseña: passEncriptada,
              fecha: req.body.fecha,
              fotoPerfil: req.body.foto
            }
            // res.send(user);
            Usuario.create(user);
            res.redirect('/users/login')
          }

        }).catch(error => console.log(error))
    }
  },

  login: function (req, res) { //login
    if (req.session.userLogueado != undefined) {
      return res.redirect('/')
    } else {
      return res.render("login")
    }
  },

  ingresar: function (req, res) {
    let info = req.body;
    let criterio = { where: [{ email: info.mail }] }
    Usuario.findOne(criterio)   //para ver si esta ese email
      .then(result => {     //mantenemos en result info que estamos recibiendo
        // return res.send(result)
        if (result != null) {
          let check = bcryptjs.compareSync(req.body.password, result.contraseña);   //valido que la password sea igual a result.contraseña
          // return res.send(check) //ACA ESTA EL ERROR
          if (check == true) {            //si la clave coincide....
            req.session.userLogueado = result.dataValues;
            console.log(req.session.userLogueado ,'fede')
            if(req.locals != undefined){
              req.locals.userLogueado = result.dataValues;
              console.log(locals.userLogueado, 'el locals!!!')
            }
            if (info.remember = "on") {
              res.cookie('user', result.dataValues, { maxAge: 1000 * 60 * 15 })
            }
            return res.redirect('/');
          }
          else {
            let errors = {};
            errors.message = "Contraseña incorrecta, intente de nuevo";
            res.locals.errors = errors;
            res.render("login")
          }
        } 
        else{
          let errors = {};
        errors.message = "Mail no esta registrado"
        res.locals.errors = errors;
        return res.render("login")
        }
      })
   
  },


  logout: function (req, res) {
    req.session.destroy()   // destruye la session
    res.clearCookie('user')
    return res.redirect('/')
  },

  profileEdit: function(req,res){
    let id= req.params.id
    Usuario.findByPk(id)
    .then(function(data){
    return res.render("profile-edit", {data:data})
  })},
   

  guardarProfileEdit: function( req,res){
    let userId = req.params.id
    let password = req.body.password

    Usuario.findByPk(userId)
    .then(function(data){
      if( password == ""){
        Usuario.update({
          usuario: req.body.usuario,
          email: req.body.mail,
          fecha: req.body.fecha,
          fotoPerfil: req.body.pic
        }, {where: {id: userId}})
        .then(function(data){
          res.redirect('/')
        })
        .catch(function(error){
          console.log(error)
        })
      } else{
        let contraseñaNueva = req.body.password
        if(contraseñaNueva.length  <3){
          return res.render('profile-edit', {data, error: "la contraseña debe tener al menos 3 caracteres"})
        } else{
          let contraseñaNuevaEncriptada = bcryptjs.hashSync(contraseñaNueva, 12)
           Usuario.update({
            usuario: req.body.usuario,
            email: req.body.mail,
            contraseña: contraseñaNuevaEncriptada,
            fecha: req.body.fecha,
            fotoPerfil: req.body.pic
           }, {where: {id: userId}})
           .then(function(data){
            res.redirect('/')
           })
           .catch(function(error){
            console.log(error)
           })
        }
      }
    })
    .catch(function(error){
      console.log(error)
    })
  }
}

Usuario.findAll({
  include: [
    { association: "productoUsuario" },
    { association: "comentarioUsuario" }
  ]
}).then(function (data) { console.log(data); })



module.exports = usersController;