const jwt = require('jsonwebtoken');
require('dotenv').config();

const tokenSign = async (user)=>{
    const {user_id} = user;
    return jwt.sign(
        {
            user_id,
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