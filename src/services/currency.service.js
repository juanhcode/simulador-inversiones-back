const Currency = require('../database/models/currency');

const readCurrency = async(user_id) => {
    const get = await Currency.findAll({
        where: {
            user_id:user_id
        }
    });
    return get;
}

const updateCurrency = async(id, currency) => {
    const update = await Currency.update(currency, {
        where: {
            currency_id:id
        }
    })
    return update
}

//Validaciones de la bd
const currencyExistsById = async (id) => {
    const currency = await Currency.findByPk(id);
    return currency;
}

module.exports = {
    readCurrency,
    updateCurrency,
    currencyExistsById
}