const router = require('express').Router();
// const todosController = require('./../controllers/todos.controller');
const { list } = require('./../controllers/todos.controller');

router.get('', list);

module.exports = router;
