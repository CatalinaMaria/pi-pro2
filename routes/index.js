var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');

router.get('/', indexController.index);
router.get('/search-results', indexController.results);
// router.get('/search-results/create', indexController.create);
// router.post('/search-results/store', indexController.store);
module.exports = router;