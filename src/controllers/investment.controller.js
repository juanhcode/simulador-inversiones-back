const { default: axios } = require('axios');
const investmentService = require('../services/investment.service');
require('dotenv').config();
const createInvestment = async (req, res) => {
    const { description, multiplier, type_of_investment, user_id } = req.body;
    const newInvestment = {
        description, multiplier, type_of_investment, user_id
    }
    try {
        const response = await investmentService.createInvestment(newInvestment);
        console.log(response);
        if (response?.errors) {
            res.status(400).json({
                status: 'BAD REQUEST',
                data: "Ups, vuelve a intentarlo",
            })
        }
        res.status(201).json({
            status: "CREATED",
            data: "Investment created",
        })
    } catch (error) {
        res.status(500).json({
            status: 'Error en el servidor',
            data: error
        })
    }
}

const deleteInvestment = async (req, res) => {
    const { id } = req.params;
    const investmentExists = await investmentService.investmentExistsById(id);
    if (!investmentExists) {
        return res.status(404).json({
            msg: `No existe la inversión con el id ${id}`
        })
    }
    const baseURL = process.env.BASE_URL;
    const itemsDeleted = await axios.delete(`${baseURL}/v1/item/${id}`);
    if (itemsDeleted.status === 200) {
        await investmentService.deleteInvestment(id);
        return res.status(200).json({
            msg: `Inversión con el id ${id} ha sido eliminado.`
        });
    }
    return res.status(500).json({
        msg: `Error al eliminar la inversión con el id ${id}`
    });
}

const getInvestment = async (req, res) => {
    const id = req.params.id;
    try {
        const investment = await investmentService.getInvestmentById(id);
        if (investment) {
            res.status(200).json(investment);
        } else {
            res.status(400).json({ error: 'Ups, vuelve a intentarlo' });
        }

    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la inversión' });
    }
}

const getAllInvestments = async (req, res) => {
    const id = req.params.id;
    try {
        const investment = await investmentService.getAllInvestments(id);
        if (investment.length > 0) {
            res.status(200).json(investment);
        } else {
            res.status(200).json({ error: 'No tienes inversiones, crea una 😁' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener todos las inversiones' });
    }
}

const updateInvestment = async (req, res) => {
    const id = req.params.id;
    const { description, quantity, price, type_of_investment, currency, user_id } = req.body;
    const newInvestment = {
        description, quantity, price, type_of_investment, currency, user_id
    }
    const investmentExists = await investmentService.investmentExistsById(id);
    if (!investmentExists) {
        return res.status(404).json({
            msg: `No existe la inversión con el id ${id}`
        })
    }
    await investmentService.updateInvestment(id, newInvestment);
    res.status(200).json({
        msg: `La Inversión ha sido actualizada.`
    });
}

const searchInvestment = async (req, res) => {
    const { word } = req.query;
    const investment = await investmentService.searchInvestment(word);
    if (!investment) {
        return res.status(404).json({
            msg: `No existe la inversión con la descripción ${word}`
        })
    }
    res.status(200).json(investment);
}

module.exports = {
    createInvestment,
    deleteInvestment,
    getInvestment,
    getAllInvestments,
    updateInvestment,
    searchInvestment
}