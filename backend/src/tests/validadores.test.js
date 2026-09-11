const {validar} = require('../services/registro');
const verificarToken = require('../middlewares/verificarToken');

describe('Suite: seguridad de contraseñas', ()=>{
    test('1. rechaza longitud menor a 8 caracteres', ()=>{
        expect(validar('12334')).toBe(false);
    });
    test('debe bloquear si no hay token',()=>{
        const req = {headers: {}};
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        const next = jest.fn();
        
        verificarToken(req,res,next);
        expect(res.status).toHaveBeenCalledWith(401);
        expect(next).not.toHaveBeenCalled();
    });

    
});
    