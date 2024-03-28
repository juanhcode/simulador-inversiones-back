const {Router} = require('express');
const router = Router();
const investmentController = require('../../controllers/investment.controller');
const { validateFields } = require('../../middlewares/validate-fields');
const { check } = require('express-validator');

router.post('',[
    check("description", "La descripción es obligatorio").not().isEmpty().isString(),
    check("quantity", "La cantidad es obligatorio").not().isEmpty().isString(),
    check("price", "El precio es obligatorio").not().isEmpty(),
    check("individual_total", "El precio individual es obligatorio").not().isEmpty(),
    check("total", "El total es obligatorio").not().isEmpty(),
    check("type_of_investment", "El tipo de inversión es obligatorio").not().isEmpty().isString(),
    check("user_id", "El id del usuario es obligatorio").not().isEmpty(),
    validateFields
], investmentController.createInvestment);

module.exports = router;