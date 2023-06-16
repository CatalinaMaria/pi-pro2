var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/detalle/:id', productsController.product);
// router.post('/detalle/:id', productsController.comentario);
router.get('/add', productsController.productadd);
router.post('/add', productsController.addProduct);
router.post('/borrar/:id', productsController.borrar);
router.post('/editarproducto/:id', productsController.procesarEditar);
router.get('/editarproducto/:id', productsController.editar);



module.exports = router;