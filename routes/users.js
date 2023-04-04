var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/register', usersController.register);
router.get('/login', usersController.login);
router.get('/myprofile', usersController.profile);
router.get('/edit', usersController.edit);

module.exports = router;