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

const updateItem = async(id, item) => {
    const update = await Item.update(item, {
        where: {
            item_id:id
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

const itemExists = async (id) => {
    const item = await Item.findByPk(id);
    return item;
}

module.exports = {
    createItem,
    getAllItems,
    itemExistsInvestmentId,
    deleteItems,
    itemExists,
    updateItem
}