var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/register', usersController.register);
router.post('/register', usersController.store)

router.get('/login', usersController.login);
router.post('/login',usersController.ingresar);

router.get('/myprofile', usersController.profile);
router.post("/perfil", usersController.store);


router.get("/editarperfil/:id", usersController.editar);
router.post('/editarperfil', usersController.editarPost)

router.get("/register", usersController.index);

router.post('/logout', usersController.logout);



module.exports = router;