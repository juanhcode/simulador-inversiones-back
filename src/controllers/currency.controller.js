const currencyService = require('../services/currency.service');

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
    const { name, value } = req.body;
    const newCurrency = {
        name, value
    }
    
    try {
        const currencyExists = await currencyService.currencyExistsById(id);
        if (!currencyExists) {
            return res.status(404).json({
                msg: `No existe la moneda con el id ${id}`
            })
        }
        await currencyService.updateCurrency(id, newCurrency);
        res.status(200).json({
            msg: `La moneda ha sido actualizada.`,
            data: newCurrency
        });   
    }
    catch (error) {
        //console.log(error.parent.);
        if (error.parent.code === 'P0001') {
            // Manejo específico para errores P0001
            console.error('Error de validación:', error.parent.message);
            res.status(400).send({ error: `${error.parent.message}` });
        } else {
            // Para otros tipos de errores, simplemente los pasamos al siguiente middleware
            res.status(500).json({ error: 'Error del servidor' });
        }
    }
}



module.exports = {
    getCurrencyController,
    updateCurrencyController
}