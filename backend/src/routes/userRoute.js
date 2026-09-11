const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const vereficarToken = require('../middlewares/verificarToken');

router.get('/' , userController.getAllUser);
router.get('/profile', vereficarToken, userController.getProfile);

router.get('/publicaciones', userController.listarPosts);
router.get('/publicaciones/:id', vereficarToken, userController.getPostByID);

router.post('/register', userController.signUp);
router.post('/login', userController.login);

router.post('/publicacion', vereficarToken, userController.crearPost);



module.exports = router;