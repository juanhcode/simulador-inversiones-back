const {Router} = require('express');
const router = Router();
const authControllers = require('../../controllers/auth.controller');

router.post('', authControllers.login);

module.exports = router;