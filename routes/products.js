var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/detalle/:id', productsController.product);
router.get('/add', productsController.productadd);
router.post('/add', productsController.addProduct);
router.post('/borrar', productsController.borrar);
router.get('/editarproducto', productsController.editar)
router.post('/editarproducto', productsController.procesarEditar);
router.get('/editarproducto/:id', productsController.editar);



module.exports = router;