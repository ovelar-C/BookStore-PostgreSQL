const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookControlller');
const vereficarToken = require('../middlewares/verificarToken');
const soloAdmin = require('../middlewares/soloAdmin');

router.get('/', bookController.getAllBook);

module.exports = router;