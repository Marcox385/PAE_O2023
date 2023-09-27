const router = require('express').Router();

// const todosController = require('./../controllers/todos.controller');
const controller = require('./../controllers/todos.controller');
const authMiddleware = require('./../middlewares/auth');
const uploadMiddleware = require('./../middlewares/upload');

router.get('', authMiddleware, controller.list);
router.post('', authMiddleware, controller.create);
router.post('/upload', authMiddleware, uploadMiddleware.single('file'),
    (req, res) => {
        console.log('File', req.file);
        res.send();
    }
);

module.exports = router;
