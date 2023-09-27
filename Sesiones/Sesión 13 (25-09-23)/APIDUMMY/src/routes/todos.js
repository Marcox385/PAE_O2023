const router = require('express').Router();

// const todosController = require('./../controllers/todos.controller');
const controller = require('./../controllers/todos.controller');
const authMiddleware = require('./../middlewares/auth');
const uploadMiddleware = require('./../middlewares/upload');

/**
 * @swagger
 * /todos:
 *  get:
 *   description: list all todos in a template
 *   tags:
 *     - todos
 *   parameters: 
 *     - in: query
 *       name: key
 *       description: user authentication key
 *       schema: 
 *        type: string
 *   responses:
 *     200:
 *       description: list all todos
 *     401:
 *       description: missing or invalid user authentication key
 */
router.get('', authMiddleware, controller.list);

router.post('', authMiddleware, controller.create);
router.post('/upload', authMiddleware, uploadMiddleware.single('file'),
    (req, res) => {
        console.log('File', req.file);
        res.send();
    }
);

module.exports = router;
