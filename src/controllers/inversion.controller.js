const inversionService = require('../services/inversion.service');

const postInversionController = async (req, res) => {
    try {
        const investment = req.body;
        console.log(investment.inversion.fija)
        const investmentCreated = await inversionService.postInversion(investment.inversion.fija);
        res.status(201).json(investmentCreated);
    } catch (error) {
        res.status(500).json({error: "Error al crear la inversion"})
        console.log(error);
    }
}

module.exports = {
    postInversionController
}