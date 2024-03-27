const {Router} = require('express');
const router = Router();
const authControllers = require('../../controllers/auth.controller');

/**
 * @swagger
 * /auth:
 *   post:
 *     summary: Inicia sesión en la aplicación.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               passsword:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Usuario autenticado con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Token de autenticación.
 *                 usuario:
 *                   $ref: '#/components/schemas/Usuario'
 *       401:
 *         description: Credenciales inválidas.
 *       500:
 *         description: Error en el servidor.
 */

router.post('', authControllers.login);

module.exports = router;