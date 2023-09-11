const router = require('express').Router();

// const todosController = require('./../controllers/todos.controller');
const { list } = require('./../controllers/todos.controller');
const authMiddleware = require('./../middlewares/auth');

router.get('', authMiddleware, list);

module.exports = router;
