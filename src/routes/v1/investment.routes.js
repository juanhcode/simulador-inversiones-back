const {Router} = require('express');
const router = Router();
const investmentController = require('../../controllers/investment.controller');
const { validateFields } = require('../../middlewares/validate-fields');
const { check } = require('express-validator');

router.post('',[
    check("description", "La descripción es obligatorio").not().isEmpty().isString(),
    check("quantity", "La cantidad es obligatorio").not().isEmpty(),
    check("price", "El precio es obligatorio").not().isEmpty(),
    check("currency", "La moneda es obligatoria").not().isEmpty(),
    check("type_of_investment", "El tipo de inversión es obligatorio").not().isEmpty().isString(),
    check("user_id", "El id del usuario es obligatorio").not().isEmpty(),
    validateFields
], investmentController.createInvestment);

router.delete('/:id',[
    check("id", "El id es obligatorio").not().isEmpty(),
    validateFields
], investmentController.deleteInvestment);

router.get('/:id',[
    check("id", "El id es obligatorio").not().isEmpty(),
    validateFields
], investmentController.getInvestment);

router.get('/all/:id',investmentController.getAllInvestments);

router.put('/:id',[
    check("description", "La descripción es obligatorio").not().isEmpty().isString(),
    check("quantity", "La cantidad es obligatorio").not().isEmpty(),
    check("price", "El precio es obligatorio").not().isEmpty(),
    check("currency", "La moneda es obligatoria").not().isEmpty(),
    check("type_of_investment", "El tipo de inversión es obligatorio").not().isEmpty().isString(),
    check("user_id", "El id del usuario es obligatorio").not().isEmpty(),
    check("id", "El id es obligatorio").not().isEmpty(),
    validateFields
], investmentController.updateInvestment);

module.exports = router;