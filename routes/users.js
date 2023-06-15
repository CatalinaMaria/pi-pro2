var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/register', usersController.register);
router.post('/register', usersController.store)

router.get('/login', usersController.login);
router.post('/login',usersController.ingresar);

router.get('/myprofile/:user', usersController.profile);
router.post("/perfil", usersController.store);


// router.get("/editarperfil/:id", usersController.editar);
// router.post('/editarperfil', usersController.editarPost)

router.get('/profile-edit/:id', usersController.profileEdit);
router.post('/profile-edit/:id', usersController.guardarProfileEdit);

router.post('/logout', usersController.logout);



module.exports = router;