const Currency = require('../database/models/currency');

const createCurrency = async(currency) => {
    const create = await Currency.create(currency);
    return create;
}

const readCurrency = async() => {
    const get = await Currency.findAll();
    return get;
}

const updateCurrency = async(id, currency) => {
    const update = await Currency.update(currency, {
        where: {
            id:id
        }
    })
    return update
}

const deleteCurrency = async(id) => {
    const deleteC = await Currency.destroy({
        where: {
            id:id
        }
    })
    return deleteC;
}

module.exports = {
    createCurrency,
    readCurrency,
    updateCurrency,
    deleteCurrency
}