const model = require('./../models/todo');

module.exports = {
    list: (req, res) => {
        console.log('Here!');
        model.find({}).then(response => {
            res.send(response);
        })
    },

    create: (req, res) => {
        /* 
            title
            description
            status ? new
         */
        const todo = req.body;
        // console.log(req.body);
        const result = model.create(todo);
        res.send(result);
    }
}
