const jwt = require('jsonwebtoken');
require('dotenv').config();

const tokenSign = async (user)=>{
    const {id} = user;
    return jwt.sign(
        {
            id,
        },
        process.env.JWT_SECRET,
        {
            expiresIn:"6h"
        }
    );
}

module.exports = {
    tokenSign
}