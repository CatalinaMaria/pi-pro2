var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const db = require('./database/models');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//express-session
app.use(session({ secret: "Mensaje secreto",
                  resave: false,
                  saveUninitialized: true}));

//Pasar datos de session a vistas
app.use(function(req,res,next){
  if (req.session.userLogueado != undefined) {
    res.locals.userLogueado = req.session.userLogueado
    return next();
  }
  else if(req.cookies.userLogueado != undefined){
    req.session.userLogueado = req.cookies.userLogueado;
    res.locals.userLogueado = req.sessions.userLogueado;
    return next();
  }
  return next();
})

app.use(function(req, res, next) {
  if (req.cookies.user != undefined && req.session.userLogueado == undefined) {
      let idUsuarioEnCookie = req.cookies.user.id;
      db.Usuario.findByPk(idUsuarioEnCookie)
      .then((user) => {
        req.session.userLogueado = user;
        res.locals.userLogueado  = user.usuario;
        return next();
      }).catch((err) => {
        console.log(err);
        return next();
      });
  } else {
    return next();
  }
});



//Rutas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
