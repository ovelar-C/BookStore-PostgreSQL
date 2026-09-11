const jwt = require('jsonwebtoken');
require('dotenv').config();

async function generarToken(usuario) {
    const payload = {
        id: usuario.id,
        rol: usuario.rol
    }

    const token = jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: '2h' }
    );
    return token;
}
exports.module = {
    generarToken
}