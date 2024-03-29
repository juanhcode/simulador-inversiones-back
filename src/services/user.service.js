const User = require('../database/models/User');

const isValidEmail = async (email) => {
    const isEmailExists = await User.findOne({
        where: {
            email,
        }
    })
    return isEmailExists;
}
module.exports = {
    isValidEmail
}