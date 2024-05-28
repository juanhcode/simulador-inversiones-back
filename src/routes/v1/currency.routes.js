const { Router } = require('express');
const router = Router();
const currencyController = require('../../controllers/currency.controller');
const { validateFields } = require('../../middlewares/validate-fields');
const { check } = require('express-validator');

router.get('/:id', [
    check("id", "El id es obligatorio").not().isEmpty(),
    validateFields
], currencyController.getCurrencyController);

router.put('/:id', [
    check("id", "El id es obligatorio").not().isEmpty(),
], currencyController.updateCurrencyController);


module.exports = router;