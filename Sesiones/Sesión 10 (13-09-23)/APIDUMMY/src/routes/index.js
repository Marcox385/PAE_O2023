// Método 1: Exportar una función que reciba la aplicación original
/* module.exports = function (_app) {
    _app.get('', (req, res) => {
        console.log('Petición recibida a index');
        res.send('API Works');
    });
} */

// Método 2: Router de Express
const express = require('express');
const router = express.Router();
const path = require('path'); // Para manejo de rutas (compatible con cualquier OS)

const auth = require('./auth');
const todos = require('./todos');

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
