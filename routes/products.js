var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/detalle/:id', productsController.product);
router.get('/add', productsController.productadd);
// router.get('/add/create', productsController.create);
router.post('/add', productsController.addProduct);
// router.get('/detalle/:id/create', productsController.create);
// router.post('/detalle/:id/store', productsController.store);

module.exports = router;