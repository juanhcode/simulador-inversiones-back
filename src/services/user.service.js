const User = require('../database/models/User');
const bcrypt = require('bcrypt');
const isValidEmail = async (email_address) => {
    const isEmailExists = await User.findOne({
        where: {
            email_address,
        }
    })
    return isEmailExists;
}
const createUser = async (newUser) => {
    const { first_names, last_names,user_name,email_address,password,rol_id} = newUser;
    const passwordHash = await bcrypt.hash(password, 10);
    const user = new User({
        first_names,
        last_names,
        user_name,
        email_address,
        password: passwordHash,
        rol_id,
    });
    try {
        await user.save();
        return true;
    } catch (error) {
        return error;
    }
}

module.exports = {
    isValidEmail,
    createUser
}