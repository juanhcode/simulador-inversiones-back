const investmentService = require('../services/investment.service');
const createInvestment = async (req, res) => {
    const { description, quantity,price,individual_total,total,type_of_investment,user_id } = req.body;
    const newInvestment = {
        description, quantity, price, individual_total, total, type_of_investment, user_id
    }   
    try {
        const response = await investmentService.createInvestment(newInvestment);
        if (response?.errors) {
            res.status(400).json({
                status:'BAD REQUEST',
                data: "Ups, vuelve a intentarlo",
            })
        }
        res.status(201).json({
            msg: "Investment created",
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Error en el servidor',
            error: error
        })
    }
}

module.exports = {
    createInvestment
}