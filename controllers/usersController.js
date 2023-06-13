const data = require('../data/data');
const db = require("../database/models");
const usuario = db.Usuario;
const producto = db.Product;
const bcryptjs = require('bcryptjs');

const usersController = {
  profile: function (req, res, next) { //relacion con perfiles y comentarios
    let user = req.params.usuario
    let relaciones = {
      include: [
        { association: "productoUsuario", include: [{ association: 'productoComentarios' }] },
        { association: "comentarioUsuario" }
      ],
      order: [[{model: producto, as : 'productoUsuario'}, 'createdAt', 'DESC']]
    }
    usuario.findByPk(user, relaciones)
      .then(function (data) {
        // res.send(data)
        console.log(data.productoUsuario);
        return res.render('/myprofile/:user', { usuario:data});
      }).catch(function (error) {
        console.log(error)
      })
  },
  editar: function (req, res) { //editar el usuario
    let id = req.params.id
    usuario.findByPk(id)
      .then(function (data) {
        return res.render('profile-edit', { data: data })
      })
  },
  editarPost: function (req, res) { //editar el post
    let id = req.body.id

    usuario.findByPk(id)
      .then(function (data) {
        if (req.session.idUser == data.id) {
          usuario.update({
            email: req.body.mail,
            usuario: req.body.nombre,
            password: req.body.contrasenia,
            fecha: req.body.fechanacimiento,
            foto: req.body.fotoperfil,

          }, { where: [{ id: id }] })
          res.redirect('/')
        }
        else {
          let errors = {}
          errors.message = "No se puede editar este perfil"
          res.locals.errors = errors;
          return res.render('profile-edit', { data: data })
        }

      })
      .catch(function (error) {
        res.send({ error })
        console.log(error);
      })
  },

  register: function (req, res) { //registro
    res.render('register')
  },
  store: function (req, res) {
    //res.send({data: req.body})
    let errors = {}; //para almacenar el error
    if (req.body.mail == " ") {
      errors.message = "El campo email está vacío";
      res.locals.errors = errors;
      res.render("register");
    }

    else if (req.body.password < 3) {
      errors.message = "Hay un error, el campo password debe tener 3 o mas caracteres";
      res.locals.errors = errors;
      res.render("register");
    }

    else {
      let criterio = {
        email: req.body.mail
      }
      usuario.findOne({ where: [criterio] })
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
            usuario.create(user);
            res.redirect('/users/login')
          }

        }).catch(error => console.log(error))
    }
  },

  login: function (req, res) { //login
    if (req.session.user != undefined) {
      return res.redirect('/')
    } else {
      return res.render("login")
    }
  },

  ingresar: function (req, res) {
    usuario.findOne(
      {where: [{email: req.body.mail}]}
    )
    .then(function(results){
      if (results){
        let check=  bcryptjs.compareSync(req.body.password, results.contraseña)
        if(check){
          req.session.usuario = results.dataValues;
          if(req.body.remember){
            res.cookie('usuario', results.dataValues.email, {maxAge: 1000 * 60 * 5})
          }
          return res.redirect('/users/login')
        }
        else{
          res.send(results)
          let errors = {}
          errors.message = "La informacion ingresada es incorrecta"
          res.locals.errors = errors;
          return res.render('login')
        }
      } else{
        let errors = {};
        errors.message = "Email no registrado"
        res.locals.errors = errors;
        return res.render("login")
      }
    })
  },
  //(req, res) => {
  //   let errors = {};
  //   let info = req.body;
  //   let criterio = { where: [{ email: info.mail }] }


  //   if (info.mail == "") {
  //     errors.message = "El campo email esta vacio";
  //     res.locals.errors = errors;
  //     return res.render("login")
  //   } else if (info.password == "") {
  //     errors.message = "El campo contraseña esta vacio";
  //     res.locals.errors = errors;
  //     return res.render("login")
  //   } else {
  //     let criterio = { where: [{ email: info.mail }] }
  //   }

  //   usuario.findOne(criterio)
  //     .then(result => {
  //       if (result != null) { //si el usuario existe
  //         let check = bcryptjs.compareSync(password, result.contraseña);
  //         if (check == true) {
  //           req.session.usuario = {
  //             email: result.dataValues.mail,
  //           };
  //           res.locals.usuario = result.dataValues
  //         }
  //         if (info.rememberMe) {
  //           res.cookie("userId", { email: result.dataValues.mail }, { maxAge: 1000 * 60 * 10 })
  //         } return res.redirect('/')
  //       } else {
  //         errors.message = "El email no existe";
  //         res.locals.errors = errors;
  //         return res.render('login')
  //       }
  //     }).catch(errors => {
  //       res.send(errors)
  //     })

  // },
  
  logout: function (req, res) {
    req.session.destroy()
    res.clearCookie('usuario')
    return res.redirect('/')
  }
}

usuario.findAll({
  include: [
    { association: "productoUsuario" },
    { association: "comentarioUsuario" }
  ]
}).then(function (data) { console.log(data); })



module.exports = usersController;