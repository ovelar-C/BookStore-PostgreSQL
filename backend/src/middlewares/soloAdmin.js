const deleteUser = (req,res, next) =>{
    try {
        console.log(req.usuario.rol);
        if(req.usuario.rol !== 2){
            return res.status(403).json({
                mensaje : "sin autorización"
            });
        }
        next();
        
    } catch (error) {
        return res.status(500).json({
            mensaje : "error del servidor"
        });
    }
}
module.exports = deleteUser;
