const {Router} = require('express');
const router = Router();
const authControllers = require('../../controllers/auth.controller');

router.post('', authControllers.login);
router.post('/register',authControllers.register);
module.exports = router;