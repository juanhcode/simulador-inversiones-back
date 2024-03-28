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
            status:"CREATED",
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
    await investmentService.deleteInvestment(id);
    res.status(200).json({
        msg: `Inversión con el id ${id} ha sido eliminado.`
    });

}

const getInvestment = async (req, res) => {
    const id = req.params.id;
    try {
        const investment = await investmentService.getInvestmentById(id);
        if(investment){
            res.status(200).json(investment);
        }else{
            res.status(400).json({ error: 'Ups, vuelve a intentarlo' });
        }
        
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener todos los casos de prueba' });
    }
}

module.exports = {
    createInvestment,
    deleteInvestment,
    getInvestment
}