var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/register', usersController.register);
router.get('/login', usersController.login);
router.get('/myprofile', usersController.profile);
router.get('/edit', usersController.edit);
router.get('/register/create', usersController.create);
router.post('/register/store', usersController.store);
router.get('/login/create', usersController.create);
router.post('/login/store', usersController.store);
router.get('/edit/create', usersController.create);
router.post('/edit/store', usersController.store);
router.get('/myprofile/create', usersController.create);
router.post('/myprofile/store', usersController.store);
module.exports = router;