const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) =>{
    try {
        const authHeader = req.headers.authorization;
        if(!authHeader){
            return res.status(401).json({
                error: 'Token requerido'
            });
        }

        const [tipo, token] = authHeader.split(' ');
        if(tipo !== 'Bearer' || !token){
            return res.status(401).json({
                error: 'formato de token invalido'
            });
        }

        const payload = jwt.verify(
            token,
            process.env.JWT_SECRET
        );
        req.usuario = payload;
        next();

    } catch (error) {
        return res.status(401).json({
            error: 'token invalido o expirado'
        });
    }
};

module.exports = verificarToken;