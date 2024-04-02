const { tokenSign } = require('../helpers/generateToken');
const userService = require('../services/user.service');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
    try {
        const { email_address, password } = req.body;
        const isEmailExists = await userService.isValidEmail(email_address);
        const isPasswordValid = bcrypt.compareSync(password, isEmailExists.password);

        if (!isEmailExists){
            return res.status(404).json({
                msg: 'No existe usuario con el correo: ' + correo_electronico
            });
        }
        if (!isPasswordValid) {
            return res.status(401).json({
                msg: 'Contraseña incorrecta'
            });
        }
        const token = await tokenSign(isEmailExists);
        res.status(200).json({
            token
        }) 
    } catch (error) {

    }
}


const register = (req, res) => {
    const { names, last_names,user_name,email_address,password } = req.body;
    const regex = /.+@correounivalle.edu.co$/;
    const isValid = regex.test(email_address);
    if(!isValid){
        res.status(401).send({
            msg: "Email no pertenece a la Universidad Del Valle"
        })
    }
    const user = {
        names,
        last_names,
        user_name,
        email_address,
        password
    }
    const response = userService.createUser(user);
    if (response) {
        res.status(201).send({
            message: "Usuario Registrado",
        })
    } else {
        res.send(response);
    }
}

module.exports = {
    login,
    register
}