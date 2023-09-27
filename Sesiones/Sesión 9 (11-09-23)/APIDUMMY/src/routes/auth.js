const express = require('express');
const router = express.Router();
const controller = require('./../controllers/usuarios.controller');

router.post('/login', express.json(), controller.login);

module.exports = router;
