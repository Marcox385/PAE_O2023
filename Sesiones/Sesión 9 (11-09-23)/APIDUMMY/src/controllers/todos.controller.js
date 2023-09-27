const model = require('./../models/todo');

module.exports = {
    list: (req, res) => {
        const todos = model.find();
        res.send(todos);
    }
}
