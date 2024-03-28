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

const investmentExistsById = async (id) => {
    const investment = await Investment.findByPk(id);
    return investment;
}

const deleteInvestment = async(investmentId)=>{
    const investmentDeleted = await Investment.destroy({
        where:{
            investment_id:investmentId,
        }
    });
    return investmentDeleted;
}

const getInvestmentById = async(investmentId)=>{
    const investment = await Investment.findByPk(investmentId);
    const {dataValues} = investment;
    if(dataValues){
        return dataValues;
    }
    return investment;
}

module.exports = {
    createInvestment,
    investmentExistsById,
    deleteInvestment,
    getInvestmentById
}