const currencyService = require('../services/currency.service');

const postCurrencyController = async (req, res) => {
    const {name, value, investment_id, user_id} = req.body;
    const newCurrency = {
        name, value, investment_id, user_id
    }   
    try {
        const response = await currencyService.createCurrency(newCurrency);
        if (response?.errors) {
            res.status(400).json({
                status:'BAD REQUEST',
                data: "Ups, intenta de nuevo",
            })
        }
        res.status(201).json({
            status:"CREATED",
            data: "Moneda creada",
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 'Error del servidor',
            data: error
        })
    }
}

const getCurrencyController = async (req, res) => {
    const user_id = req.params.id;
    try {
        const currency = await currencyService.readCurrency(user_id);
        if(currency){
            res.status(200).json(currency);
        }else{
            res.status(400).json({ error: 'Ups, intenta nuevamente' });
        }
        
    } catch (error) {
        res.status(500).json({ error: 'Error del servidor' });
    }
}

const updateCurrencyController = async (req, res) => {
    const id = req.params.id;
    const { name, value, investment_id, user_id } = req.body;
    const newCurrency = {
        name, value, investment_id, user_id
    } 
    const currencyExists = await currencyService.currencyExistsById(id);
    if (!currencyExists) {
        return res.status(404).json({
            msg: `No existe la moneda con el id ${id}`
        })
    }
    await currencyService.updateCurrency(id, newCurrency);
    res.status(200).json({
        msg: `La moneda ha sido actualizada.`
    });
}

const deleteCurrencyController = async (req, res) => {
    const {id}  = req.params;
    const currencyExists = await currencyService.currencyExistsById(id);
    if (!currencyExists) {
        return res.status(404).json({
            msg: `No existe la moneda con el id ${id}`
        })
    }
    await currencyService.deleteCurrency(id);
    res.status(200).json({
        msg: `Moneda con el id ${id} ha sido eliminado.`
    });

}

module.exports = {
    postCurrencyController,
    getCurrencyController,
    updateCurrencyController,
    deleteCurrencyController
}