const bcrypt = require('bcrypt');

const validar =  (password)=>{
    const passRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passRegex.test(password);
}
const hashear = async (password)=>{
    const saltRounds = 10;
    return await bcrypt.hash(password,saltRounds);
}
const comparar = async (password, passUser)=>{
    return await bcrypt.compare(password,passUser);
}
module.exports = {
    validar,
    comparar,
    hashear
}