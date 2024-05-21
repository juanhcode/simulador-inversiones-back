const { Router } = require('express');
const router = Router();
const itemController = require('../../controllers/item.controller');
const { validateFields } = require('../../middlewares/validate-fields');
const { check } = require('express-validator');

router.post('/', [
    check("description", "La descripción es obligatorio").not().isEmpty().isString(),
    check("price", "El precio es obligatorio").not().isEmpty().isNumeric().withMessage("Solo puede digitar numeros"),
    check("quantity", "La cantidad es obligatoria").not().isEmpty().isNumeric().withMessage("Solo puede digitar numeros"),
    check("investment_id", "El id de la inversión es obligatorio").not().isEmpty().isInt(),
    check("currency_id", "El id de la moneda es obligatoria").not().isEmpty().isInt(),
    validateFields
], itemController.postItemController);

/*
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
*/

module.exports = router;