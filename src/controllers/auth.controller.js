const { tokenSign } = require('../helpers/generateToken');
const userService = require('../services/user.service');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const isEmailExists = await userService.isValidEmail(email);
        const isPasswordValid = bcrypt.compareSync(password, isEmailExists.password);
        
        if (!isEmailExists){
            return res.status(404).json({
                msg: 'No existe usuario con el correo: ' + correo_electronico
            });
        }
        if (!isPasswordValid) {
            return res.status(401).json({
                msg: 'Contrasenia incorrecta'
            });
        }
        const token = await tokenSign(isEmailExists);
        res.status(200).json({
            token
        }) 
    } catch (error) {

    }
}

module.exports = {
    login
}