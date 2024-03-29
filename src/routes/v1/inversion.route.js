const { Router } = require('express');
const router = Router();
const investmentController = require('../../controllers/inversion.controller');

router.post('/', investmentController.postInversionController);

module.exports = router;