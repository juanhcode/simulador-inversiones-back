const Investment = require('../database/models/Investment')
const createInvestment = async (investment) => {
    const newInvestment = new Investment(investment);
    try {
        const investmentResponse = await newInvestment.save();z
        return investmentResponse;
    } catch (error) {
        return error;
    }
}

module.exports = {
    createInvestment
}