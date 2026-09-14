const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');
const registro = require('../services/registro');
const generarToken = require('../services/generarToken');

//registro de usuario
const signUp = async (req, res) => {
    try {
        console.log("datos del usuario a registrar",req.body);

        const { username, email, password } = req.body;

        const emailFind = await userModel.findEmail(email);
        if (emailFind) {
            return res.status(401).json({
                error: "credenciales invalidas"
            });
        }

        if (!(registro.validar(password))) {
            return res.status(400).json({
                error: "contraseña debil o caracteres invalidos"
            });
        }
        
        const passHash = await registro.hashear(password);

        const resultado = await userModel.createUser(username, email, passHash);
        if (!resultado) {
            res.status(400).json({
                mensaje: "error al registrar usuario"
            });
        }
        res.status(201).json({
            mensaje: 'usuario registrado',
            usuario: resultado
        });

    } catch (error) {
        console.error('[ERROR]:', error);
        res.status(500).json({
            error: 'Error en servidor'
        });
    }
};
//iniciar sesion
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const usuario = await userModel.findEmail(email);
        if (!usuario) {
            return res.status(401).json({
                error: 'credenciales invalidas'
            });
        }
        if (!await registro.comparar(password, usuario.password)) {
            return res.status(401).json({
                error: "credenciales invalidas"
            });
        }
        const token = await generarToken(usuario);
        if (!token) {
            return res.status(500).json({
                error: "error al generar token"
            });
        }
        return res.status(200).json({
            token : token,
            usuario: usuario
         });

    } catch (error) {
        return res.status(500).json({
            error: "Error del servidor"
        });
    }
}
//obtener perfil de usuario
const getProfile = async (req, res) => {
    try {
        const id = req.usuario.id;
        const usuario = await userModel.findById(id);

        if (!usuario) {
            return res.status(404).json({
                error: 'usuario no encontrado'
            });
        }

        //eliminar id y rol
        return res.status(200).json({
            id: usuario.id,
            username: usuario.username,
            email: usuario.email,
            rol: usuario.rol_id
        });

    } catch (error) {
        return res.status(500).json({
            error: 'error de servidor'
        });
    };
}
//obtener todos los usuarios
const getAllUser = async (req, res) => {
    try {
        const usuarios = await userModel.getAllUser();
        if (usuarios.length === 0) {
            return res.status(404).json({
                mensaje: "NO HAY USUARIOS"
            });
        }
        return res.status(200).json(usuarios);
    } catch (error) {
        return res.status(500).json({
            error: "error server",
            error: error.message
        });
    }
}
//eliminar usuario
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        if (!(await userModel.findById(id))) {
            return res.status(404).json({
                mensaje: "id no encontrada"
            });
        }
        const resultado = await userModel.deleteUser(id);
        if (!resultado) {
            return res.status(400).json({
                mensaje: "error al aliminar usuario"
            });
        }
        return res.status(200).json({
            mensaje: "usuario eliminado correctamente",
            usuario: resultado
        });
    } catch (error) {
        return res.status(500).json({
            mensaje: "error del servidor"
        });
    }
}
//actualizar usuario| incompleto
const updateUser = async (req, res) => {
    try {
        const id = req.usuario.id;
        const {datos} = req.body;
        const encontrado = await userModel.findById(id);
        if (!encontrado) {
            return res.status(400).json({
                mensaje: "id no encontrado"
            });
        }
        const resultado = await userModel.updateUser(datos);

    } catch (error) {

    }
}


//---------------------------------------------------------------------
const crearPost = async (req, res) => {
    try {
        const { titulo, contenido } = req.body;
        const autor_id = req.usuario.id;

        await userModel.crearPost(titulo, contenido, autor_id);
        res.status(201).json({
            mensaje: "publicacion publicada"
        });
    } catch (error) {
        res.status(500).json({
            mensaje: "error server"
        });
    }
}
const getPostByID = async (req, res) => {
    try {
        const post = await userModel.getPostById(req.params.id);

        if (!post) {
            return res.status(404).json({
                error: "Post no encontrado"
            });
        }
        if (post.autor_id !== req.usuario.id) {
            return res.status(403).json({
                error: "Forbidden: No eres el dueño"
            });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({
            mensaje: "error del servidor"
        });
    }
}
const listarPosts = async (req, res) => {
    try {
        //paginacion
        const { search, page = 1, limit = 10 } = req.query;
        //offset
        const offeset = (page - 1) * Number(limit);
        const publicaciones = await userModel.obtenerPost(
            search,
            Number(limit),
            offeset
        );
        if (publicaciones.length === 0) {
            res.status(404).json({
                mensjae: "eeror no posts"
            });
        }
        res.status(200).json(publicaciones);

    } catch (error) {
        res.status(500).json({
            mensaje: "error del servidor"
        });
    }
}
//---------------------------------------------------------------------


module.exports = {
    signUp,
    login,
    getProfile,
    getAllUser,
    crearPost,
    deleteUser,
    updateUser,
    getPostByID,
    listarPosts,
};