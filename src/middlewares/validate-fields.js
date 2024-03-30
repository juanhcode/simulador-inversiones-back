//Paquete validacion de campos en el body
const {validationResult} = require('express-validator');

//next se debe llamar para que el middleware pase al sig middleware
const validateFields = (req, res, next) => {
    //Mostrar errores si los hay en el body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    next();
}

module.exports = {
    validateFields
}