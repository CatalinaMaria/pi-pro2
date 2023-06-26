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
    let errors = {}; 
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
    // return res.send(info)
    let criterio = { where: [{ email: info.mail }] }
    Usuario.findOne(criterio)   
      .then(result => {     
        // return res.send(result)
        if (result != null) {
          let check = bcryptjs.compareSync(req.body.password, result.contraseña);   //valido que la password sea igual a result.contraseña
          if (check == true) {            //si la clave coincide....
            req.session.userLogueado = result.dataValues;
            console.log(req.session.userLogueado, 'session')
            if (req.locals != undefined) {
              req.locals.userLogueado = result.dataValues;
              console.log(locals.userLogueado, 'el locals!!!')
            }
            if (info.remember == "on") {
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
        else {
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

  profileEdit: function (req, res) {
    let id = req.params.id
    Usuario.findByPk(id)
      .then(function (data) {
        return res.render("profile-edit", { data: data })
      })
  },
  guardarProfileEdit: function (req, res) {
    let userId = req.params.id;
    let contrasenanueva = req.body.password;

    let dataUser = {
      id: userId,
      email: req.body.mail,
      usuario: req.body.usuario,
      fecha: req.body.fecha,
      fotoPerfil: req.body.pic
    }

    let errors = {}; // almacena error
    if (req.body.mail == "") {
      errors.message = "El campo email está vacío";
      res.locals.errors = errors;
      res.render('profile-edit', { data: dataUser });
    }

    else if (req.body.usuario == "") {
      errors.message = "El campo usuario está vacío";
      res.locals.errors = errors;
      res.render('profile-edit', { data: dataUser });
    }

    else if (contrasenanueva.length < 3 && contrasenanueva.length > 0) {
      errors.message = "Hay un error, el campo password debe tener 3 o mas caracteres";
      res.locals.errors = errors;
      res.render('profile-edit', { data: dataUser });
    }

    let objUsuario = {
      usuario: req.body.usuario,
      email: req.body.mail,
      fecha: req.body.fecha,
      fotoPerfil: req.body.pic
    }

    let filtro = {
      where: [
        { id: userId }
      ]
    }

    if (contrasenanueva != "") {
      let passEncriptada = bcryptjs.hashSync(contrasenanueva, 12);
      objUsuario.contraseña = passEncriptada
    }


    Usuario.update(objUsuario, filtro)
      .then(function (data) {
        res.locals.userLogueado.usuario = req.body.usuario;
        res.redirect('/')
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}

module.exports = usersController;