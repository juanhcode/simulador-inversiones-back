const { default: axios } = require('axios');
require('dotenv').config();
const itemService = require('../services/item.service');

const postItemController = async (req, res) => {
    const {description , price , quantity , investment_id , currency_id} = req.body;
    const newItem = {
        description, price, quantity, investment_id, currency_id
    }   
    try {
        const response = await itemService.createItem(newItem);
        if (response?.errors) {
            res.status(400).json({
                status:'BAD REQUEST',
                data: "Ups, intenta de nuevo",
            })
        }
        res.status(201).json({
            status:"CREATED",
            data: "Item creado",
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 'Error del servidor',
            data: error
        })
    }
}

const getAllItemsByInvestmentController = async (req, res) => {
    const id = req.params.id;
    try {
        const items = await itemService.getAllItems(id);
        if(items.length > 0){
            const data = await Promise.all(items.map(getInvestmentWithCurrency));
            res.status(200).json(data);
        }else{
            res.status(200).json({ error: 'No tienes items, crea uno 😁' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener todos las inversiones' });
    }
}

async function getInvestmentWithCurrency(item) {
    const baseURL = process.env.BASE_URL;
    try {
        const response = await axios.get(`${baseURL}/v1/currency/${item.currency_id}`);
        const currencyByItem = response.data;
        let objItemWithCurrency = {
            item_id: item.item_id,
            description: item.description,
            price: item.price,
            quantity: item.quantity,
            currency:{
                currency_id: currencyByItem[0].currency_id,
                name: currencyByItem[0].name,
                value: currencyByItem[0].value
            },
        }
        return objItemWithCurrency;
    } catch (error) {
        return error;
    }
}


const updateItemController = async (req, res) => {
    const baseURL = process.env.BASE_URL;
    const id = req.params.id;
    const { description, price, quantity, currency } = req.body;
    const newItem = {
        description, price, quantity
    }
    const itemExists = await itemService.itemExists(id);
    if (!itemExists) {
        return res.status(404).json({
            msg: `No existe el item con el id ${id}`
        })
    }
    const response = await axios.put(`${baseURL}/v1/currency/${currency.currency_id}`, currency);
    if(response.status === 200){
        await itemService.updateItem(id, newItem);
        res.status(200).json({
            msg: `El item ha sido actualizado.`
        });
    }
}

const deleteItemController = async (req, res) => {
    const {id}  = req.params;
    const itemExists = await itemService.itemExistsInvestmentId(id);
    if (itemExists.length === 0) {
        return res.status(404).json({
            msg: `No existe los items con el id ${id}`
        })
    }
    await itemService.deleteItems(id);
    res.status(200).json({
        msg: `Items con el id ${id} ha sido eliminado.`
    });
}

module.exports = {
    postItemController,
    getAllItemsByInvestmentController,
    deleteItemController,
    updateItemController
}