const { Router } = require('express');
const router = Router();
const currencyController = require('../../controllers/currency.controller');
const { validateFields } = require('../../middlewares/validate-fields');
const { check } = require('express-validator');

router.post('/', [
    check("name", "El nombre de la moneda es obligatorio").not().isEmpty().isString(),
    check("value", "El valor es obligatorio").not().isEmpty().isNumeric().withMessage("Solo puede digitar numeros"),
    check("user_id", "El id del usuario es obligatorio").not().isEmpty().isInt(),
    validateFields
], currencyController.postCurrencyController);

router.get('/:id', [
    check("id", "El id es obligatorio").not().isEmpty(),
    validateFields
], currencyController.getCurrencyController);

router.put('/:id', [
    check("id", "El id es obligatorio").not().isEmpty(),
], currencyController.updateCurrencyController);

router.delete('/:id', [
    check("id", "El id es obligatorio").not().isEmpty(),
    validateFields
],currencyController.deleteCurrencyController);

module.exports = router;