const investmentService = require('../services/investment.service');
const createInvestment = async (req, res) => {
    const { description, quantity, price, individual_total, total, type_of_investment, user_id } = req.body;
    const newInvestment = {
        description, quantity, price, individual_total, total, type_of_investment, user_id
    }
    try {
        const response = await investmentService.createInvestment(newInvestment);
        return response;
    } catch (error) {
        return error;
    }
}

module.exports = {
    createInvestment
}