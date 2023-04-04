var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/', productsController.product);
router.get('/add', productsController.productadd);

module.exports = router;