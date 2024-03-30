const Currency = require('../database/models/Currency');

const createCurrency = async(currency) => {
    const create = await Currency.create(currency);
    return create;
}

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

const deleteCurrency = async(id) => {
    const deleteC = await Currency.destroy({
        where: {
            currency_id:id
        }
    })
    return deleteC;
}

//Validaciones de la bd
const currencyExistsById = async (id) => {
    const currency = await Currency.findByPk(id);
    return currency;
}

module.exports = {
    createCurrency,
    readCurrency,
    updateCurrency,
    deleteCurrency,
    currencyExistsById
}