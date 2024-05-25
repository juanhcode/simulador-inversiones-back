const Item = require('../database/models/Item');

const createItem = async(item) => {
    const itemCreated = await Item.create(item);
    return itemCreated;
}

const getAllItems = async(investment_id)=>{
    const items = await Item.findAll({
        where:{
            investment_id,
        }
    });
    return items;
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

const deleteItems = async(investment_id) => {
    const itemsDeleted = await Item.destroy({
        where: {
            investment_id
        }
    })
    return itemsDeleted;
}

//Validaciones de la bd
const itemExistsInvestmentId = async (investment_id) => {
    const currency = await Item.findAll({
        where: {
            investment_id
        }
    });
    return currency;
}

module.exports = {
    createItem,
    getAllItems,
    itemExistsInvestmentId,
    deleteItems
}