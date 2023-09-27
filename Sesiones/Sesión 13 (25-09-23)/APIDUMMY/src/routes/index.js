// Router de Express
const express = require('express');
const router = express.Router();
const path = require('path'); // Para manejo de rutas (compatible con cualquier OS)

const auth = require('./auth');
const todos = require('./todos');

/**
 * @swagger
 * /:
 *  get:
 *   description: home page
 *   tags:
 *     - home
 *   responses:
 *     200:
 *       description: home page content
 */
router.get('', (req, res) => {
    // Método 1: __dirname para ruta actual y hardcoded
    // res.sendFile(__dirname + '/../../...');

    // Método 2: uso de módulo "path"
    const url = path.join(__dirname,'..', '..', 'public', 'index.html');
    res.sendFile(url);
});

router.use('', express.json());
router.use('', auth); // Equivalente a router.use(auth);
router.use('/todos', todos);

module.exports = router;
