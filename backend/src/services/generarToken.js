const jwt = require('jsonwebtoken');
require('dotenv').config();

async function generarToken(usuario) {
    console.log(usuario.id, usuario.rol_id);
    const payload = {
        id: usuario.id,
        rol: usuario.rol_id
    }

    const token = jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: '2h' }
    );
    return token;
}
module.exports = generarToken;